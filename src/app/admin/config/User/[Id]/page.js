"use client";
import Dropdown from "@/components/Dropdown";
import Cards from "../../components/Cards";
import Form from "../../components/Form";
import Input from "../../components/Input";
import AddUser from "../../hook/user";

export default function Page({ params }) {
  const { Id } = params;
  const { onSubmitForm, handleChange, formData, isloadin, message } =
    AddUser(Id);
  const rol = [
    { value: "admin", label: "admin" },
    { value: "user", label: "user" },
  ];

  let Title = "Agregar Nuevo Usurario";
  let bottontext = "Agregar";

  if (Id !== "nuevo") {
    Title = "Editar Usuario";
    bottontext = "Salvar Cambios";
  }

  return (
    <Cards
      message={message.message}
      title={Title}
      url={"/admin/config/User"}
      texturl={"Regresar a User"}
    >
      <Form isloadin={isloadin} bottontext={bottontext} onSubmit={onSubmitForm}>
        <Input
          label={"nombre"}
          type={"text"}
          name={"username"}
          placeholder={"Gaspar Tabora"}
          value={formData.username}
          onChange={handleChange}
        />

        <Input
          label={"Email"}
          type={"text"}
          name={"email"}
          placeholder={"mi@gmail.com"}
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          label={"Imagen"}
          type={"text"}
          name={"imgUrl"}
          placeholder={"www.facebook/mi foto.jpg"}
          value={formData.imgUrl}
          onChange={handleChange}
        />

        <Input
          label={"Cantraseña"}
          type={"text"}
          name={"password"}
          placeholder={"@micontra"}
          value={formData.password}
          onChange={handleChange}
        />
        <Dropdown
          text={"Selecione un Rol"}
          id="roles"
          name={"rol"}
          value={formData.rol}
          onChange={handleChange}
          options={rol}
        />
      </Form>
    </Cards>
  );
}
