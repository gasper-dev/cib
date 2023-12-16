import { ProductsData } from "@/context/ProductContext";
import { useState } from "react";

export default function Categorys() {
  const [isOpen, setOpen] = useState(false);
  const { selectedCategory, setSelectedCategory, uniqueCategories } =
    ProductsData();

  const onClickSetCategory = (category) => {
    setSelectedCategory(category);
    setOpen(!isOpen);
  };
  return (
    <nav>
      <button
        onClick={() => setOpen(!isOpen)}
        id="dropdown-button"
        className="flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
      >
        {selectedCategory ? selectedCategory : "Todas"}
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-1"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="absolute translate-y-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            {uniqueCategories?.map((category) => (
              <li key={category}>
                <button
                  onClick={() => onClickSetCategory(category)}
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
