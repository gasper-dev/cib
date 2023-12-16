"use client";
import { ProductsData } from "@/context/ProductContext";
import Link from "next/link";
export default function ProductsTable() {
  const { products } = ProductsData();
  return (
    <table className="w-full mt-2 text-xs text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Nombre
          </th>
          <th scope="col" className="px-6 py-3">
            Cantidad
          </th>

          <th scope="col" className="px-3 py-3 text-right">
            Opciones
          </th>
        </tr>
      </thead>
      <tbody>
        {products?.map((res) => (
          <tr
            key={res.id}
            className="font-semibold text-gray-900 bg-white border-b dark:text-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="px-6 py-4">{res.nombre}</td>
            <td className="px-6 py-4">{res.cantidad}</td>

            <td className="flex justify-end px-6 py-4">
              <Link
                className="font-medium text-green-600 dark:text-green-600"
                href={`/admin/config/Productos/${res.id}`}
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
