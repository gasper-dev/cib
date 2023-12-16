export default function OutbondlongCard({
  children,
  fecha,
  title,
  subtitle,
  destino,
  motorista,
}) {
  return (
    <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h5>
      {subtitle ? (
        <>{subtitle}</>
      ) : (
        <div>
          <p className="text-base text-gray-500 sm:text-lg dark:text-gray-400">
            <span className="text-green-600 block">
              Fecha: <span className="underline">{fecha}</span>
            </span>
            <span className="text-green-600 block">
              Destino: <span className="underline">{destino}</span>
            </span>
            <span className="text-green-600 block">
              Motorista: <span className="underline">{motorista}</span>
            </span>
          </p>
        </div>
      )}

      <div className="mx-auto  text-left  grid grid-cols-1 md:grid-cols-1 gap-4 ">
        {children}
      </div>
    </div>
  );
}
