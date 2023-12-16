import { baseURL, TextUrl, fetchWithOption } from "./config";

export async function UpdateProductById(productId, Products) {
  return fetchWithOption(
    `${baseURL}/products/${productId}`,
    "PUT",
    Products,
    true
  );
}

export async function UpdateUser(userId, Userdata) {
  return fetchWithOption(`${baseURL}/user/${userId}`, "PUT", Userdata, true);
}
export async function UpdateMotoristas(motoristaId, datamotorista) {
  return fetchWithOption(
    `${baseURL}/motoristas/${motoristaId}`,
    "PUT",
    datamotorista,
    true
  );
}
export async function UpdateSalidasById(Idsalida, selectedProducts) {
  return fetchWithOption(
    `${baseURL}/salidas/${Idsalida}`,
    "PUT",
    selectedProducts,
    true
  );
}
export async function DeleteSalidasById(Idsalida) {
  return fetchWithOption(
    `${baseURL}/salidas/${Idsalida}`,
    "DELETE",
    null,
    true
  );
}
