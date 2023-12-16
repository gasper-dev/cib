import { ProductsData } from "@/context/ProductContext";
import { useState, useEffect } from "react";
import { CreateProducts } from "@/lib/PostData";
import { UpdateProductById } from "@/lib/PutAndDeleteData";
import { useRouter } from "next/navigation";
export function AddProducts(Id) {
  const router = useRouter();
  const { setUpdate, selectedCategory, setSelectedCategory, products } =
    ProductsData();
  const [isloading, setLoading] = useState(false);
  const [message, setErrorMessage] = useState([]);
  const Inicialstate = {
    nombre: "",
    ImgUrl: "",
    cantidad: 0,
    codigo: 0,
    unidad: "",
    category: selectedCategory,
  };
  const [formData, setFormData] = useState(Inicialstate);

  useEffect(() => {
    if (Id !== "nuevo") {
      const producto = products.find((product) => product.id === Id);

      if (producto) {
        const { nombre, ImgUrl, cantidad, codigo, unidad, category } = producto;
        setSelectedCategory(category);
        setFormData({
          ...formData,
          nombre: nombre,
          ImgUrl: ImgUrl,
          cantidad: cantidad,
          codigo: codigo,
          unidad: unidad,
        });
      }
    }
  }, [Id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      category: selectedCategory,
    }));
  }, [selectedCategory]);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const actionMessage =
        Id !== "nuevo"
          ? await UpdateProductById(Id, formData)
          : await CreateProducts(formData);
      setErrorMessage(actionMessage);
      if (actionMessage.message !== "ok") {
        setLoading(false);
        return message;
      }
      setUpdate(true);
      router.push("/admin/config/Productos");
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    handleChange,
    formData,
    isloading,
    message,
    setFormData,
    onSubmitForm,
  };
}
