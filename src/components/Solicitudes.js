"use client";
import { UserProfile } from "@/context/User";
import Link from "next/link";
export default function Solicitudes() {
  const { salidas } = UserProfile();
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Usuarios
            </th>
            <th scope="col" className="px-6 py-3">
              fechas
            </th>

            <th scope="col" className="px-6 py-3">
              Destinos
            </th>

            <th scope="col" className="px-3 py-3 text-right">
              Opciones
            </th>
          </tr>
        </thead>
        <tbody>
          {salidas.map((res) => (
            <tr
              key={res.id}
              className="font-semibold text-gray-900 bg-white border-b dark:text-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="w-32 p-4">{res.user.username}</td>
              <td className="px-6 py-4">{res.fecha}</td>
              <td className="px-6 py-4">{res.destino}</td>

              <td className="flex justify-end px-6 py-4">
                <Link
                  className="font-medium text-green-600 dark:text-green-600"
                  href={`/admin/solicitudes/materiales/${res.id}`}
                >
                  Ver
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
