import ProductsContextProvider from "@/context/ProductContext";
import "./globals.css";
import { Inter } from "next/font/google";
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CIB</title>
      </head>
      <body className="bg-white dark:bg-slate-800">
        <div className={inter.className}>
          <ProductsContextProvider>
            <>{children} </>
          </ProductsContextProvider>
        </div>
      </body>
    </html>
  );
}
