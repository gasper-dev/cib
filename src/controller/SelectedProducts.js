import { useEffect } from 'react';
import Cookies from 'js-cookie';

export function SelectedProductsController(
  selectedProducts,
  setselectedProducts,
  setSelectAdd
) {
  useEffect(() => {
    const selectedProductsCookie = Cookies.get('selectedProductscookie');

    if (selectedProductsCookie) {
      const productoAdd = JSON.parse(selectedProductsCookie);
      setSelectAdd(productoAdd.productos);
      setselectedProducts(JSON.parse(selectedProductsCookie));
    } else {
      setSelectAdd([]);
      setselectedProducts([]);
    }
  }, [setselectedProducts]);

  const eliminarProducto = (index) => {
    const newProductos = [...selectedProducts.productos];
    newProductos.splice(index, 1);
    const updatedSelectedProducts = {
      ...selectedProducts,
      productos: newProductos,
    };
    setSelectAdd(newProductos);
    setselectedProducts(updatedSelectedProducts);
    Cookies.set(
      'selectedProductscookie',
      JSON.stringify(updatedSelectedProducts)
    );
  };

  const aumentarCantidad = (index) => {
    const newSelectedProducts = [...selectedProducts.productos];
    if (
      newSelectedProducts[index].cantidad >
      newSelectedProducts[index].cantidadAdd
    ) {
      newSelectedProducts[index].cantidadAdd += 1;

      const newSelectedProductsData = {
        ...selectedProducts,
        productos: newSelectedProducts,
      };

      setselectedProducts(newSelectedProductsData);
      Cookies.set(
        'selectedProductscookie',
        JSON.stringify(newSelectedProductsData)
      );
    }
  };

  const disminuirCantidad = (index) => {
    const newSelectedProducts = [...selectedProducts.productos];
    if (newSelectedProducts[index].cantidadAdd > 1) {
      newSelectedProducts[index].cantidadAdd -= 1;

      const newSelectedProductsData = {
        ...selectedProducts,
        productos: newSelectedProducts,
      };

      setselectedProducts(newSelectedProductsData);
      Cookies.set(
        'selectedProductscookie',
        JSON.stringify(newSelectedProductsData)
      );
    }
  };

  return { eliminarProducto, aumentarCantidad, disminuirCantidad };
}
