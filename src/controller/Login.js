import Cookies from "js-cookie";
import { GetLogin } from "@/lib/GetData";
import { useState } from "react";
export default function LoginController(router) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const token = await GetLogin(email, password);

      if (token.message) {
        setLoading(false);
        return setErrorMessage(token.message);
      }
      router.replace("/admin");
      Cookies.set("token", token, { sameSite: "none", secure: true });
    } catch (error) {
      return { error: "server errror" };
    }
    setLoading(false);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    isLoading,
    handleSubmit,
  };
}
