"use client";
import { useState, useEffect } from "react";
import { UserProfile } from "@/context/User";
import { GetSalidasUserById } from "@/lib/GetData";
import Link from "next/link";
import Datepicker from "./Datepicker";
import Dropdown from "./Dropdown";
export default function SalidasByUser() {
  const { user } = UserProfile();
  const [salidas, setSalidas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [fechaFiltro, setFechaFiltro] = useState(""); // Estado para la fecha de filtro
  const [estadoFiltro, setEstadoFiltro] = useState("todas");

  const opciones = [
    { label: "todas", value: "todas" },
    { label: "aprobadas", value: "aprobadas" },
    { label: "no_aprobadas", value: "no_aprobadas" },
  ];

  useEffect(() => {
    const fetchSalidas = async () => {
      const { salidas, totalPages } = await GetSalidasUserById(
        user.id,
        currentPage
      );
      const salidasFiltradas = salidas.filter((salida) => {
        // Filtrar por fecha
        const salidaFecha = new Date(salida.fecha);
        const fechaInicio = new Date(fechaFiltro);
        const fechaFin = new Date(fechaFiltro);
        fechaFin.setDate(fechaFin.getDate() + 1);

        if (
          fechaFiltro &&
          (salidaFecha < fechaInicio || salidaFecha >= fechaFin)
        ) {
          return false;
        }

        // Filtrar por estado de aprobación
        if (estadoFiltro === "aprobadas" && !salida.aprobada) {
          return false;
        }
        if (estadoFiltro === "no_aprobadas" && salida.aprobada) {
          return false;
        }

        return true;
      });

      setSalidas(salidasFiltradas);
      setTotalPages(totalPages);
    };

    fetchSalidas();
  }, [currentPage, user.id, fechaFiltro, estadoFiltro]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <Datepicker
        label={"Fecha"}
        value={fechaFiltro}
        onChange={(e) => setFechaFiltro(e.target.value)}
      />

      <Dropdown
        text={"Estado de la Solicitud"}
        id="Destino"
        value={estadoFiltro}
        onChange={(e) => setEstadoFiltro(e.target.value)}
        options={opciones}
      />

      {salidas.map((salida) => (
        // Renderizar las salidas filtradas aquí
        <div key={salida.id}>{/* Contenido de la salida */}</div>
      ))}
      <table className="w-full mt-2 text-xs text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              fechas
            </th>

            <th scope="col" className="px-6 py-3">
              Destinos
            </th>
            <th scope="col" className="px-3 py-3 ">
              Estado
            </th>

            <th scope="col" className="px-3 py-3 text-right">
              Opciones
            </th>
          </tr>
        </thead>
        <tbody>
          {salidas.map((res, index) => (
            <tr
              key={index}
              className="font-semibold text-gray-900 bg-white border-b dark:text-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">{res.fecha}</td>
              <td className="px-6 py-4">{res.destino}</td>

              {res.aprobada == false ? (
                <>
                  <td className="px-3 py-3">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                      Sin Aprobar
                    </div>
                  </td>
                  <td className="flex justify-end px-6 py-4">
                    <Link
                      className="font-medium text-green-600 dark:text-green-600"
                      href={`/admin/solicitudes/materiales/${res.id}`}
                    >
                      Ver
                    </Link>
                  </td>
                </>
              ) : (
                <>
                  <td className="px-3 py-3">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                      Aprobada
                    </div>
                  </td>
                  <td className="flex justify-end px-6 py-4">
                    <Link
                      className="font-medium text-green-600 dark:text-green-600"
                      href={`/admin/`}
                    >
                      Generar pdf
                    </Link>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <nav
        className="flex items-center justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Paginas/
          <span className="font-semibold text-gray-900 dark:text-white">
            {currentPage}-{totalPages}
          </span>
        </span>
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <button
              disabled={currentPage === 1}
              onClick={() => paginate(currentPage - 1)}
              className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"></path>
              </svg>
            </button>
          </li>

          {totalPages > 1 && (
            <div className="flex justify-center my-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}

          {currentPage < totalPages && (
            <li>
              <a
                href="#"
                disabled={currentPage === 1}
                onClick={() => paginate(currentPage + 1)}
                className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>

                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
                </svg>
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
