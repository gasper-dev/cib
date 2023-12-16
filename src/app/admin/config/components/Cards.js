import Link from "next/link";

export default function Cards({ message, title, url, texturl, children }) {
  return (
    <>
      <Link
        href={url}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <svg
          className="flex-shrink-0 w-6 h-6 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M8.58598 4.58594L16.0003 12.0002L8.58615 19.4144L8.58608 13.0003L3.00002 13.0004L3 11.0004L8.58605 11.0003L8.58598 4.58594ZM18.0001 19.0002L18.0001 5.00018H20.0001L20.0001 19.0002H18.0001Z"
            fill="rgba(31,179,33,1)"
          ></path>
        </svg>
        <span className="flex-1 ml-3 whitespace-nowrap">{texturl}</span>
      </Link>
      <main className=" bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
          <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 text-blue-400 md:space-y-6 sm:p-8">
              {message}
              <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                {title}
              </h1>
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
