"use client";
import Link from "next/link";
import Image from "next/image";
export default function HeadersHome() {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          <Link href="/" rel="preload" className="flex items-center">
            <div className="w-8 h-8 mr-3">
              <Image
                src="/casha.png"
                width={98}
                height={98}
                alt="casha"
                className="object-cover object-center w-full h-full rounded-full"
              />
            </div>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              CIB
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              href="/login"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Acceder
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
