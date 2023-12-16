"use client";
import Link from "next/link";
import AddUser from "../hook/user";
import Image from "next/image";
export default function UsersTable() {
  const { Users, OnclickUpdateEnable } = AddUser();
  return (
    <table className="w-full mt-2 text-xs text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Nombre
          </th>

          <th scope="col" className="px-6 py-3">
            Rol
          </th>
          <th scope="col" className="px-6 py-3">
            Abilitado
          </th>

          <th scope="col" className="px-3 py-3 text-right">
            Opciones
          </th>
        </tr>
      </thead>
      <tbody>
        {Users?.map((res) => (
          <tr
            key={res.id}
            className="font-semibold text-gray-900 bg-white border-b dark:text-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div className="w-10 h-10 ">
                <Image
                  width={130}
                  height={130}
                  className="object-cover object-center w-full h-full rounded-full "
                  src={res.imgUrl || "/user.png"}
                  alt="Jese image"
                />
              </div>

              <div className="pl-3">
                <div className="text-base font-semibold">{res.username}</div>
                <div className="font-normal text-gray-500">{res.email}</div>
              </div>
            </th>
            <td className="px-6 py-4">{res.rol}</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  onClick={() => OnclickUpdateEnable(res.id, !res.anable)}
                  defaultChecked={res?.anable}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>

            <td className="flex justify-end px-6 py-4">
              <Link
                className="font-medium text-green-600 dark:text-green-600"
                href={`/admin/config/User/${res.id}`}
              >
                Editar
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
