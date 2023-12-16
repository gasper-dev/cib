import { useState } from "react";
import Cookies from "js-cookie";
import { CreateSalida } from "@/lib/PostData";
import { useRouter } from "next/navigation";
import { UpdateSalidasById } from "@/lib/PutAndDeleteData";
import { UserProfile } from "@/context/User";
export function SearchProductsController({
  fecha,
  motorista,
  destino,
  sistema,
  userId,
}) {
  const [searchData, setSearchData] = useState("");
  const [productos, setProductos] = useState([]);
  const [selectedProducts, setselectedProducts] = useState([]);
  const [searching, setSearching] = useState(false);
  const [selctAdd, setSelectAdd] = useState([]);
  const [message, setMessage] = useState([]);
  const router = useRouter();
  const { setSalidasChange } = UserProfile();
  const agregarProducto = (producto) => {
    const select = { ...producto, sistema };
    const produtosselecte = [...selctAdd, select];

    const newProductsAdd = {
      fecha,
      motorista,
      destino,
      userId,
      productos: [...produtosselecte],
    };

    setSelectAdd(produtosselecte);
    setselectedProducts(newProductsAdd);
    Cookies.set("selectedProductscookie", JSON.stringify(newProductsAdd));
  };
  const agregarProductoEdiccion = (producto) => {
    const select = { ...producto, sistema };
    const produtosselecte = [...selctAdd, select];

    const newProductsAdd = {
      id: selectedProducts.id,
      aprobada: false,
      fecha,
      motorista,
      destino,
      productos: [...produtosselecte],
    };

    setSelectAdd(produtosselecte);
    setselectedProducts(newProductsAdd);
    Cookies.set("selectedProductscookie", JSON.stringify(newProductsAdd));
  };

  const aumentarCantidad = (id) => {
    const newProducts = productos.map((producto) => {
      if (producto.id === id) {
        return { ...producto, cantidadAdd: producto.cantidadAdd + 1 };
      }
      return producto;
    });
    setProductos(newProducts);
  };

  const disminuirCantidad = (id) => {
    const newProducts = productos.map((producto) => {
      if (producto.id === id && producto.cantidadAdd > 0) {
        return { ...producto, cantidadAdd: producto.cantidadAdd - 1 };
      }
      return producto;
    });
    setProductos(newProducts);
  };

  const actualizarCantidad = (id, cantidad) => {
    const newProducts = productos.map((producto) => {
      if (producto.id === id) {
        return { ...producto, cantidadAdd: cantidad };
      }
      return producto;
    });
    setProductos(newProducts);
  };

  const CreateNewsalida = async () => {
    try {
      setSearching(true);
      const response = await CreateSalida(selectedProducts);
      if (!response == "ok") {
        setSearching(false);
        throw new Error(response.message);
      }

      Cookies.remove("selectedProductscookie");
      router.push("/admin");
      setSalidasChange(true);
    } catch (error) {
      setSearching(false);
      setMessage(error.message);
    }
  };
  const UpdateSalidas = async () => {
    try {
      setSearching(true);
      const response = await UpdateSalidasById(
        selectedProducts.id,
        selectedProducts
      );
      if (!response == "ok") {
        setSearching(false);
        throw new Error(response.message);
      }

      router.push(`/admin/solicitudes/materiales/${selectedProducts.id}`);
      Cookies.remove("selectedProductscookie");
      setSalidasChange(true);
    } catch (error) {
      setSearching(false);
      setMessage(error.message);
    }
  };

  return {
    searchData,
    setSearchData,
    productos,
    setProductos,
    selectedProducts,
    setSelectAdd,
    searching,
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
  };
}
