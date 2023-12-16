import { baseURL, TextUrl, fetchWithOption } from "./config";

export async function GetProducts() {
  return fetchWithOption(`${baseURL}/products/`, "GET", null, false);
}

export async function GetProductsById(id) {
  return fetchWithOption(`${baseURL}/products/${id}`, "GET", null, false);
}

export async function GetDestinos() {
  return fetchWithOption(`${baseURL}/destinations/`, "GET", null, false);
}

export async function GetMotoristas() {
  return fetchWithOption(`${baseURL}/motoristas/`, "GET", null, false);
}

export async function GetLocation(search) {
  return fetchWithOption(
    `${baseURL}/destinations/${search}`,
    "GET",
    null,
    false
  );
}

export async function GetSalidas() {
  return fetchWithOption(`${baseURL}/salidas/`, "GET", null, false);
}

export async function GetSalidasByid(Id) {
  return fetchWithOption(`${baseURL}/salidas/${Id}`, "GET", null, false);
}
export async function GetSalidasUserById(Id, page) {
  return fetchWithOption(
    `${baseURL}/salidas/user/${Id}/${page}`,
    "GET",
    null,
    false
  );
}

export async function GetUsers() {
  return fetchWithOption(`${baseURL}/user`, "GET", null, true);
}

export async function Search(search) {
  return fetchWithOption(
    `${baseURL}/products/search/${search}`,
    "GET",
    null,
    false
  );
}

export async function VerifyUser() {
  return fetchWithOption(`${baseURL}/user/verifyuser`, "GET", null, true);
}
export async function GetTotales() {
  return fetchWithOption(`${baseURL}/totales`, "GET", null, true);
}

export async function GetLogin(email, password) {
  const requestBody = { email, password };
  return fetchWithOption(`${baseURL}/admin/signIn`, "POST", requestBody, false);
}
