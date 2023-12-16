import Cookies from "js-cookie";
export const baseURL = "https://full-api.vercel.app";
export const TextUrl = "http://localhost:400";

const headers = {
  Origin: "https://cib-web.vercel.app",
  "Content-Type": "application/json",
};

const options = {
  cache: "no-store",
  mode: "cors",
  headers,
  credentials: "include",
};

export async function fetchWithOption(
  url,
  method = "GET",
  body = null,
  includeToken = false
) {
  const requestOptions = {
    ...options,
    method,
    body: body ? JSON.stringify(body) : null,
  };

  if (includeToken) {
    const token = Cookies.get("token");
    if (token) {
      requestOptions.headers["x-access-token"] = token;
    }
  }

  try {
    const res = await fetch(url, requestOptions);
    return res.json();
  } catch (error) {
    return { error: "Failed to fetch data" };
  }
}
