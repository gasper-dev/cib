import { Suspense } from "react";
import ProductSelection from "./SelectedProducts";
import { Search } from "@/lib/GetData";
import Searchbotton from "./SearchButton";
import Table from "./Table";
import { SearchProductsController } from "../controller/SearchProducts";

export default function SearchProducts(props) {
  const {
    searchData,
    setSearchData,
    productos,
    setProductos,
    selectedProducts,
    searching,
    setSelectAdd,
    setSearching,
    setselectedProducts,
    agregarProducto,
    agregarProductoEdiccion,
    aumentarCantidad,
    disminuirCantidad,
    actualizarCantidad,
    CreateNewsalida,
    UpdateSalidas,
    message,
  } = SearchProductsController(props);

  const onSubmitSearchProducts = async (e) => {
    e.preventDefault();
    setSearching(true);
    try {
      const res = await Search(searchData);
      if (!res.message) {
        const productosFormateados = res.map((productos) => ({
          ...productos,
          cantidadAdd: 1,
        }));
        setProductos(productosFormateados);
      } else {
        setProductos([]);
      }
    } catch (error) {
      return error.message;
    }
    setSearching(false);
  };

  return (
    <>
      <Searchbotton
        onSubmitSearchProducts={onSubmitSearchProducts}
        setSearchData={setSearchData}
        searching={searching}
      />
      <Suspense fallback={"Loading.."}>
        <Table title={"Productos Encontrados"}>
          {productos.map((productos) => (
            <tr
              key={productos.id}
              className="font-semibold text-gray-900 bg-white border-b dark:text-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">{productos.nombre}</td>
              <td className="px-6 py-4">
                <div className="flex justify-center space-x-3">
                  <button
                    onClick={() => disminuirCantidad(productos.id)}
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
                    <input
                      type="number"
                      value={productos.cantidadAdd}
                      onChange={(e) =>
                        actualizarCantidad(
                          productos.id,
                          parseInt(e.target.value)
                        )
                      }
                      className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 text-center dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <button
                    onClick={() => aumentarCantidad(productos.id)}
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
                {productos.cantidad === 0 || productos.cantidadAdd === 0 ? (
                  <p>Producto agotado</p>
                ) : (
                  <>
                    {productos.cantidadAdd > productos.cantidad ? (
                      <p>Cantidad Maxima</p>
                    ) : (
                      <>
                        {typeof selectedProducts.aprobada === "undefined" && (
                          <button
                            onClick={() => agregarProducto(productos)}
                            className="font-medium text-green-600 dark:text-green-600"
                          >
                            Agregar
                          </button>
                        )}

                        {selectedProducts.aprobada === false && (
                          <button
                            onClick={() => agregarProductoEdiccion(productos)}
                            className="font-medium text-green-600 dark:text-green-600"
                          >
                            Agregar
                          </button>
                        )}
                      </>
                    )}
                  </>
                )}
              </td>
            </tr>
          ))}
        </Table>
      </Suspense>

      <ProductSelection
        selectedProducts={selectedProducts}
        setselectedProducts={setselectedProducts}
        setSelectAdd={setSelectAdd}
        CreateNewsalida={CreateNewsalida}
        UpdateSalidas={UpdateSalidas}
        searching={searching}
        message={message}
      />
    </>
  );
}
