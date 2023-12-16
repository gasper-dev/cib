import Table from "./Table";
import { SelectedProductsController } from "../controller/SelectedProducts";
export default function ProductSelection({
  selectedProducts,
  setselectedProducts,
  setSelectAdd,
  CreateNewsalida,
  UpdateSalidas,
  searching,
  message,
}) {
  const { eliminarProducto, aumentarCantidad, disminuirCantidad } =
    SelectedProductsController(
      selectedProducts,
      setselectedProducts,
      setSelectAdd
    );
  return (
    <div>
      <span className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-red-500">
        {message}
      </span>
      <Table title={"Productos Selecionados"}>
        {selectedProducts?.productos
          ?.slice()
          .reverse()
          .map((products, index, array) => (
            <tr
              key={index}
              className="font-semibold text-gray-900 bg-white border-b dark:text-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">
                {products.nombre} /
                <span className="text-yellow-300 ">{products.sistema}</span>
              </td>

              <td className="px-6 py-4 ">
                <div className="flex justify-center space-x-3 text-center">
                  <button
                    onClick={() => disminuirCantidad(array.length - 1 - index)}
                    className="p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span className="sr-only">Quantity button</span>
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                    </svg>
                  </button>
                  <div>
                    <span className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      {products.cantidadAdd}
                    </span>
                  </div>
                  <button
                    onClick={() => aumentarCantidad(array.length - 1 - index)}
                    className="p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span className="sr-only">Quantity button</span>
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td className="flex justify-end px-6 py-4">
                <button
                  onClick={() => eliminarProducto(array.length - 1 - index)}
                  className="font-medium text-red-600 dark:text-red-500"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
      </Table>
      <>
        {typeof selectedProducts.aprobada === "undefined" && (
          <>
            {selectedProducts?.productos?.length > 0 && (
              <button
                type="button"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={CreateNewsalida}
              >
                {searching ? "Loading..." : " Enviar Solicitud"}
              </button>
            )}
          </>
        )}

        {selectedProducts.aprobada === false && (
          <button
            type="button"
            onClick={UpdateSalidas}
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {searching ? "Loading..." : "Enviar Cambios"}
          </button>
        )}
      </>
    </div>
  );
}
