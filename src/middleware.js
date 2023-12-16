import { NextResponse } from "next/server";
import { VerifyUser } from "./lib/VerifyUser";

// Función para verificar el mensaje del token
function checkTokenMessage(token) {
  return (
    token.message === "No token provided" ||
    token.message === "Anauthorized" ||
    token.message === "User not verified"
  );
}

// Función para redireccionar a una URL
function redirect(url, req) {
  return NextResponse.rewrite(new URL(url, req.url));
}

// Función para verificar el token
async function verifyToken(cookie) {
  return await VerifyUser(cookie);
}

export async function middleware(req) {
  const cookie = req.cookies.get("token")?.value;

  if (req.nextUrl && req.nextUrl.pathname.includes("/admin")) {
    if (!cookie) {
      return redirect("/login", req);
    }

    const token = await verifyToken(cookie);
    if (checkTokenMessage(token)) {
      return redirect("/login", req);
    }

    return NextResponse.next();
  }

  if (req.nextUrl && req.nextUrl.pathname.includes("/login")) {
    if (!cookie) {
      return NextResponse.next();
    }

    const token = await verifyToken(cookie);

    if (!checkTokenMessage(token)) {
      return redirect("/admin", req);
    }

    return NextResponse.next();
  }
}
