"use client";
import { UserProfile } from "@/context/User";
import UnoptimizedImage from "./UnoptimizedImage";
import Link from "next/link";
import { ProductsData } from "@/context/ProductContext";

export default function DasbordAdmin() {
  const { products } = ProductsData();

  const { totales, user } = UserProfile();

  const productosAgotados = products.filter(
    (producto) => producto.cantidad === 0
  );
  const totalAgotados = productosAgotados.length;

  return (
    <div className="container grid px-6 mx-auto">
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-50">
        Dashboard
      </h2>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <Link
          href="/admin/salidasuser"
          className="flex items-center p-4 rounded-lg shadow-xs bg-lime-600 dark:bg-lime-600"
        >
          <div className="p-3 mr-4 text-green-500 bg-blue-100 rounded-full">
            <UnoptimizedImage
              src="/user.png"
              alt="productos"
              width="150"
              height="150"
              className="object-cover object-center w-8 h-full group-hover:opacity-75"
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-white">
              Mis solicitudes
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-white">
              Ver
            </p>
          </div>
        </Link>
        {user.rol === "admin" && (
          <>
            <div className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs dark:bg-gray-700">
              <div className="p-3 mr-4 text-green-500 bg-blue-100 rounded-full">
                <UnoptimizedImage
                  src="/producto.png"
                  alt="productos"
                  width="150"
                  height="150"
                  className="object-cover object-center w-8 h-full group-hover:opacity-75"
                />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-white">
                  Total Productos
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-white">
                  {totales.products}
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs dark:bg-gray-700">
              <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
                <UnoptimizedImage
                  src="/salidas.png"
                  alt="salidas"
                  width="150"
                  height="150"
                  className="object-cover object-center w-8 h-full group-hover:opacity-75"
                />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-white">
                  Total Salidas
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-white">
                  {totales.salidas}
                </p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs dark:bg-gray-700">
              <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
                <svg
                  className="w-8 h-full"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-white">
                  User
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-white">
                  {totales.user}
                </p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs dark:bg-gray-700">
              <div className="p-3 mr-4 text-red-500 bg-red-100 rounded-full">
                <UnoptimizedImage
                  src="/return.png"
                  alt="devoluciones"
                  width="100"
                  height="100"
                  className="object-cover object-center w-8 h-full group-hover:opacity-75"
                />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-white">
                  Total Devoluciones
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-white">
                  {totales.devoluciones}
                </p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs dark:bg-gray-700">
              <div className="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full">
                <UnoptimizedImage
                  src="/alert.png"
                  alt="agotado"
                  width="100"
                  height="100"
                  className="object-cover object-center w-8 h-full group-hover:opacity-75"
                />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-white">
                  Productos Agotados
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-white">
                  {totalAgotados}
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs dark:bg-gray-700">
              <div className="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full">
                <UnoptimizedImage
                  src="/choferes.png"
                  alt="Motoristas"
                  width="100"
                  height="100"
                  className="object-cover object-center w-8 h-full group-hover:opacity-75"
                />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-white">
                  Motoristas Registrados
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-white">
                  {totales.motoristas}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
