"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext(null);
export const ProductsData = () => {
  const context = useContext(ProductsContext);
  return context;
};

export default function ProductsContextProvider({ children }) {
  // Define el estado inicial de los productos
  const [allProducts, setAllProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [isLoading, setIsLoading] = useState(true); // Estado de carga
  const [isUpdate, setUpdate] = useState(false); // Estado de carga

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { GetProducts } = await import("@/lib/GetData");
        const [ProductsData] = await Promise.all([GetProducts()]);
        setAllProducts(ProductsData);
        setIsLoading(false);
        setUpdate(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [isUpdate]);

  const filteredProducts =
    selectedCategory !== "Todas"
      ? allProducts.filter(
          (product) =>
            product.category === selectedCategory &&
            product.nombre.includes(searchValue)
        )
      : allProducts.filter(
          (product) =>
            product.nombre.includes(searchValue) || product.id === searchValue
        );

  const uniqueCategories = [...new Set(allProducts.map((res) => res.category))];

  return (
    <ProductsContext.Provider
      value={{
        products: filteredProducts,
        selectedCategory,
        uniqueCategories,
        setSelectedCategory,
        searchValue,
        setSearchValue,
        isLoading,
        setUpdate,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
