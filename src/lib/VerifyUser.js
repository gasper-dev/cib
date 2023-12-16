let tokenCache = {};
export async function VerifyUser(cookie) {
  // Verificar si el token ya está en caché
  if (tokenCache[cookie]) {
    return tokenCache[cookie];
  }
  const response = await fetch("https://full-api.vercel.app/user/verifyuser", {
    cache: "no-store",
    headers: {
      Origin: "https://cib-web.vercel.app",
      "x-access-token": cookie,
    },
  });
  const data = await response.json();

  // Almacenar el resultado de la verificación en caché
  tokenCache[cookie] = data;

  return data;
}
