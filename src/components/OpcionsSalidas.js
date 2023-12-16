"use client";
import OutbondlongCard from "@/components/LogCardView";
import { UserProfile } from "@/context/User";
import { GetSalidasByid } from "@/lib/GetData";
import { AprobarSalida } from "@/lib/PostData";
import { DeleteSalidasById } from "@/lib/PutAndDeleteData";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function OptionsSalidas({ params }) {
  const [proceso, setProceso] = useState();
  const [message, setMessage] = useState();
  const [solicitud, setSolicitud] = useState();
  const { Id } = params;
  const router = useRouter();
  const { user, setSalidasChange } = UserProfile();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const solicitud = await GetSalidasByid(Id);
        setSolicitud(solicitud);
      } catch (error) {}
    };

    fetchData();
  }, [Id, solicitud]);

  const onClickEditeSalida = () => {
    setProceso(true);
    Cookies.set("selectedProductscookie", JSON.stringify(solicitud));
    router.push("/admin/salidas");
  };

  const onClickDeleteSalida = async () => {
    try {
      setProceso(true);
      const res = await DeleteSalidasById(Id);

      if (res.message == "ok") {
        router.push("/admin/solicitudes");
        setSalidasChange(true);
      }
    } catch (error) {
      setProceso(false);
    }
  };

  const onClickAprobarSalida = async () => {
    try {
      setProceso(true);
      const res = await AprobarSalida(Id);
      if (!res == "ok") {
        setProceso(false);
        throw new Error(error.message);
      }

      router.push("/admin");
      setSalidasChange(true);
    } catch (error) {
      setMessage(error.message);
      setProceso(false);
    }
  };

  return (
    <OutbondlongCard
      title={`${solicitud?.destino}`}
      subtitle={`Fecha: ${solicitud?.fecha}`}
    >
      <span className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-red-500">
        {message}
      </span>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-3 py-3">
                Sistema
              </th>
              <th scope="col" className="px-3 py-3 text-right">
                Cantidad
              </th>
            </tr>
          </thead>
          <tbody>
            {solicitud?.productos?.map((producto, index) => (
              <tr
                key={index}
                className="font-semibold text-gray-900 bg-white border-b dark:text-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 ">{producto.nombre}</td>
                <td className="px-6 py-4">{producto.sistema}</td>
                <td className="flex justify-end px-6 py-4">
                  {producto.cantidadAdd}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="space-y-4">
          <button
            type="button"
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={onClickEditeSalida}
          >
            Editar
          </button>
          <button
            type="button"
            className="w-full text-white  bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-primary-800"
            onClick={onClickDeleteSalida}
          >
            {proceso ? "Loading..." : "Eliminar"}
          </button>
          {user.rol === "admin" && (
            <button
              type="button"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800"
              onClick={onClickAprobarSalida}
            >
              {proceso ? "Loading" : "Aprobar"}
            </button>
          )}
        </div>
      </div>
    </OutbondlongCard>
  );
}
