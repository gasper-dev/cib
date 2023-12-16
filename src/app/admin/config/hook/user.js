import { GetUsers } from "@/lib/GetData";
import { CreateUser } from "@/lib/PostData";
import { UpdateUser } from "@/lib/PutAndDeleteData";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export default function AddUser(Id) {
  const router = useRouter();
  const [isloading, setLoading] = useState(false);
  const [islUdate, setUpdate] = useState(false);
  const [message, setErrorMessage] = useState([]);
  const [Users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    imgUrl: "",
    password: "",
    rol: "",
  });

  const OnclickUpdateEnable = async (Id, Userdata) => {
    const data = {
      anable: Userdata,
    };
    setErrorMessage(await UpdateUser(Id, data));
    setUpdate(true);
  };

  useEffect(() => {
    async function GetDataUser() {
      setUsers(await GetUsers());
      setUpdate(false);
    }
    GetDataUser();
  }, [islUdate]);

  useEffect(() => {
    if (Id !== "nuevo") {
      const User = Users.find((User) => User.id === Id);
      if (User) {
        const { username, imgUrl, email, rol } = User;

        setFormData({
          ...formData,
          username: username,
          imgUrl: imgUrl,
          email: email,
          rol: rol,
        });
      }
    }
  }, [Id, Users]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const actionMessage =
        Id !== "nuevo"
          ? await UpdateUser(Id, formData)
          : await CreateUser(formData);
      setErrorMessage(actionMessage);

      if (actionMessage.message !== "ok") {
        setLoading(false);
        return message;
      }

      router.push("/admin/config/User");
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    handleChange,
    formData,
    isloading,
    message,
    setFormData,
    Users: Users.length > 0 ? Users : null,
    onSubmitForm,
    OnclickUpdateEnable,
  };
}
