"use client";
import Categorys from "@/components/Categorys";
import Cards from "../../components/Cards";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { AddProducts } from "../../hook/addProduct";

export default function Page({ params }) {
  const { Id } = params;
  const { onSubmitForm, handleChange, formData, isloadin, message } =
    AddProducts(Id);

  let Title = "Agregar Nuevo Producto";
  let bottontext = "Agregar";

  if (Id !== "nuevo") {
    Title = "Editar Producto";
    bottontext = "Salvar Cambios";
  }

  return (
    <Cards
      message={message.message}
      title={Title}
      url={"/admin/config/Productos"}
      texturl={"Regresar a Productos"}
    >
      <Categorys />
      <Form isloadin={isloadin} bottontext={bottontext} onSubmit={onSubmitForm}>
        <Input
          label={"nombre"}
          type={"text"}
          name={"nombre"}
          placeholder={'Tubos de 4"'}
          value={formData.nombre}
          onChange={handleChange}
        />
        <Input
          label={"Codigo"}
          type={"text"}
          name={"codigo"}
          placeholder={""}
          disabled={Id !== "nuevo"}
          value={formData.codigo}
          onChange={handleChange}
        />
        <Input
          label={"Cantidad"}
          type={"number"}
          name={"cantidad"}
          placeholder={""}
          value={formData.cantidad}
          onChange={handleChange}
        />
        <Input
          label={"UND"}
          type={"text"}
          name={"unidad"}
          placeholder={"UND, GALONES, LITROS, CUARTOS"}
          value={formData.unidad}
          onChange={handleChange}
        />
        <Input
          label={"Imagen"}
          type={"text"}
          name={"ImgUrl"}
          placeholder={"www.pictures/tubos.jpg"}
          value={formData.ImgUrl}
          onChange={handleChange}
        />
      </Form>
    </Cards>
  );
}
