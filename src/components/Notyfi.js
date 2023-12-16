import Link from "next/link";
import { UserProfile } from "@/context/User";
export default function Notyfi() {
  const { user, salidas } = UserProfile();

  return (
    <>
      {user.rol == "admin" && (
        <>
          {salidas.length > 0 && (
            <Link
              href="/admin/solicitudes"
              className="flex items-center px-4 py-2 rounded-md cursor-pointer gap-x-1 hover:bg-gray-100"
            >
              <div className="relative">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M7 7h10V5h2v14H5V5h2v2m5 10v-2h5v2h-5m0-6V9h5v2h-5m-4 1V9H7V8h2v4H8m1.25 2c.41 0 .75.34.75.75 0 .2-.08.39-.21.52L8.12 17H10v1H7v-.92L9 15H7v-1h2.25" />
                </svg>

                <span className="absolute flex items-center justify-center w-4 h-4 p-2 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                  {salidas.length}
                </span>
              </div>
              <span className="text-sm font-medium">Solicitudes</span>
            </Link>
          )}
        </>
      )}
    </>
  );
}
