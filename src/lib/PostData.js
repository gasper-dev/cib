import { baseURL, TextUrl, fetchWithOption } from "./config";
export async function CreateProducts(Products) {
  return fetchWithOption(`${baseURL}/products/`, "POST", Products, true);
}
export async function CreateUser(User) {
  return fetchWithOption(`${baseURL}/admin/singup/`, "POST", User, true);
}
export async function CreateSalida(selectedProducts) {
  return fetchWithOption(`${baseURL}/salidas/`, "POST", selectedProducts, true);
}
export async function CreateMotoristas(datamotorista) {
  return fetchWithOption(`${baseURL}/motoristas/`, "POST", datamotorista, true);
}

export async function AprobarSalida(IdSalida) {
  return fetchWithOption(
    `${baseURL}/salidas/aprobar/${IdSalida}`,
    "POST",
    null,
    true
  );
}
