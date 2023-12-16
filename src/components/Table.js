export default function Table({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th
                scope="col"
                className=" px-2 py-3  flex justify-center  text-center"
              >
                cantidad
              </th>

              <th scope="col" className="px-3 py-3  text-right">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
}
