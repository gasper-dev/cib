"use client";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Cards from "../../components/Cards";
import AddMotiristas from "../../hook/motoristas";

export default function Page({ params }) {
  const { Id } = params;
  const { onSubmitForm, handleChange, formData, isloadin, message } =
    AddMotiristas(Id);

  let Title = "Agregar Nuevo Motorista";
  let bottontext = "Agregar";

  if (Id !== "nuevo") {
    Title = "Editar Motorista";
    bottontext = "Salvar Cambios";
  }

  return (
    <Cards
      message={message.message}
      title={Title}
      url={"/admin/config/motoristas"}
      texturl={"Regresar a Motoristas"}
    >
      <Form isloadin={isloadin} bottontext={bottontext} onSubmit={onSubmitForm}>
        <Input
          label={"Nombre"}
          type={"text"}
          name={"motoristaName"}
          disabled={Id !== "nuevo"}
          placeholder={"Gaspar Tabora Funez"}
          value={formData.motoristaName}
          onChange={handleChange}
        />
        <Input
          label={"Cars"}
          type={"text"}
          name={"cars"}
          placeholder={"Toyota color rojo"}
          value={formData.cars}
          onChange={handleChange}
        />
        <Input
          label={"Placa"}
          type={"text"}
          name={"placa"}
          placeholder={"1052GP"}
          value={formData.placa}
          onChange={handleChange}
        />
      </Form>
    </Cards>
  );
}
