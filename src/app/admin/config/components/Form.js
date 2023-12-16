export default function Form({ isloadin, bottontext, onSubmit, children }) {
  return (
    <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
      {children}

      <button
        type="submit"
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        {isloadin ? "Creando Producto" : bottontext}
      </button>
    </form>
  );
}
