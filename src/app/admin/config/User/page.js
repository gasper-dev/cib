import Link from "next/link";
import UsersTable from "../components/UserTable";

export default function Page() {
  return (
    <>
      <Link
        href="/admin/config"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <svg
          className="flex-shrink-0 w-6 h-6 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M8.58598 4.58594L16.0003 12.0002L8.58615 19.4144L8.58608 13.0003L3.00002 13.0004L3 11.0004L8.58605 11.0003L8.58598 4.58594ZM18.0001 19.0002L18.0001 5.00018H20.0001L20.0001 19.0002H18.0001Z"
            fill="rgba(31,179,33,1)"
          ></path>
        </svg>
        <span className="flex-1 ml-3 whitespace-nowrap">
          Regresar a Configuracion
        </span>
      </Link>
      <div className="grid grid-cols-2 gap-6 mb-8 xl:grid-cols-4 ">
        <Link
          href="/admin/config/User/nuevo"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <div role="status" className="flex items-center justify-center"></div>
          Agregar Productos
        </Link>
      </div>
      <UsersTable />
    </>
  );
}
