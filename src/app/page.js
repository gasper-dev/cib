"use client";
import Categorys from "@/components/Categorys";
import Footer from "@/components/Footer";
import HeadersHome from "@/components/HeadersHome";
import ProductListHome from "@/components/ProductListHome";
import SearchProductsHome from "@/components/SaerchProductHome";
export default function Page() {
  return (
    <>
      <HeadersHome />
      <main className="max-w-2xl px-4 py-2 mx-auto sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <div className="flex">
          <Categorys />
          <SearchProductsHome />
        </div>
        <div className="py-4">
          <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Lista de Productos
          </span>
        </div>

        <ProductListHome />
      </main>
      <Footer />
    </>
  );
}
