"use client";
import { ProductsData } from "@/context/ProductContext";
import UnoptimizedImage from "./UnoptimizedImage";
import Link from "next/link";
import LoadingSkeleton from "./LoadingSkeleton";
export default function ProductListHome() {
  const { products, isLoading } = ProductsData();

  return (
    <>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <section>
          {products?.length > 0 ? (
            <div className="grid grid-cols-2 mb-24 gap-x-6 gap-y-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products?.map((res) => (
                <div
                  key={res.id}
                  className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card"
                >
                  <div className="prod-title">
                    <p className="font-bold text-gray-900 uppercase text-1xl">
                      {res.nombre}
                    </p>
                    <p className="text-sm text-gray-400 uppercase">
                      Existencia: {res.cantidad}
                    </p>
                  </div>
                  <div className="prod-img">
                    <UnoptimizedImage
                      src={res.ImgUrl}
                      alt={res.nombre}
                      width="250"
                      height="250"
                      className="object-cover object-center w-full h-full group-hover:opacity-75"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h2 className="py-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              No hay prodcutos
            </h2>
          )}
        </section>
      )}
    </>
  );
}
