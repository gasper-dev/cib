import UnoptimizedImage from "@/components/UnoptimizedImage";
import Link from "next/link";

export default function CardsButton({ img, alt, text, url }) {
  return (
    <Link href={url}>
      <div className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs dark:bg-gray-700">
        <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
          <UnoptimizedImage
            src={img}
            alt={alt}
            width="150"
            height="150"
            className="object-cover object-center w-8 h-full group-hover:opacity-75"
          />
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-white">
            {text}
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-white"></p>
        </div>
      </div>
    </Link>
  );
}
