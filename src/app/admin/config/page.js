import CardsButton from "./components/Cardbuton";

export default function Page() {
  return (
    <div className="container grid px-6 mx-auto">
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-50">
        Configuracion
      </h2>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <CardsButton
          url={"/admin/config/Productos"}
          img={"/producto.png"}
          alt={"producto"}
          text={"Productos"}
        />
        <CardsButton
          url={"/admin/config/User"}
          img={"/user.png"}
          alt={"Usuario"}
          text={"Usuarios"}
        />
        <CardsButton
          url={"/admin/config/motoristas"}
          img={"/choferes.png"}
          alt={"cMotorista"}
          text={"Motoristas"}
        />
        <CardsButton
          url={"/admin/config/Productos"}
          img={"/casha.png"}
          alt={"Finca"}
          text={"Fincas"}
        />
      </div>
    </div>
  );
}
