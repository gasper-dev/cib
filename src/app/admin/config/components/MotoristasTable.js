import Link from "next/link";
import AddMotiristas from "../hook/motoristas";
export default function MotoristasTable() {
  const { motoristas } = AddMotiristas();
  return (
    <table className="w-full mt-2 text-xs text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Nombre
          </th>
          <th scope="col" className="px-6 py-3">
            Veiculo
          </th>

          <th scope="col" className="px-3 py-3 text-right">
            Opciones
          </th>
        </tr>
      </thead>
      <tbody>
        {motoristas?.map((res, index) => (
          <tr
            key={index}
            className="font-semibold text-gray-900 bg-white border-b dark:text-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="px-6 py-4">{res.motoristaName}</td>
            <td className="px-6 py-4">{res.placa}</td>

            <td className="flex justify-end px-6 py-4">
              <Link
                className="font-medium text-green-600 dark:text-green-600"
                href={`/admin/config/motoristas/${res.id}`}
              >
                Editar
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
