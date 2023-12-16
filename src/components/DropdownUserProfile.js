import { UserProfile } from "../context/User";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function DropdownUserProfile() {
  const router = useRouter();
  const { user } = UserProfile();
  const SignOut = () => {
    Cookies.remove("token");
    Cookies.remove("selectedProductscookie");
    router.push("/");
  };
  return (
    <div className="absolute w-48 my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded-md shadow drop-down dark:bg-gray-700 dark:divide-gray-600 top-12 right-3">
      <div className="px-4 py-3" role="none">
        <p className="text-sm text-gray-900 dark:text-white" role="none">
          {user.username}
        </p>
        <p
          className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
          role="none"
        >
          {user.email}
        </p>
      </div>
      <ul className="py-1" role="none">
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
            onClick={SignOut}
          >
            Salir
          </a>
        </li>
      </ul>
    </div>
  );
}
