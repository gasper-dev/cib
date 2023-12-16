import { GetMotoristas } from "@/lib/GetData";
import { CreateMotoristas } from "@/lib/PostData";
import { UpdateMotoristas } from "@/lib/PutAndDeleteData";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export default function AddMotiristas(Id) {
  const router = useRouter();
  const [isloading, setLoading] = useState(false);
  const [message, setErrorMessage] = useState([]);
  const [motoristas, setMotoristas] = useState([]);
  const [formData, setFormData] = useState({
    motoristaName: "",
    cars: "",
    placa: "",
  });

  useEffect(() => {
    async function GetDataMotorista() {
      setMotoristas(await GetMotoristas());
    }
    GetDataMotorista();
  }, [Id]);

  useEffect(() => {
    if (Id !== undefined) {
      const motorista = motoristas.find((motorista) => motorista.id === Id);

      if (motorista) {
        const { motoristaName, cars, placa } = motorista;

        setFormData({
          ...formData,
          motoristaName: motoristaName,
          cars: cars,
          placa: placa,
        });
      }
    }
  }, [Id, motoristas]);

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
          ? await UpdateMotoristas(Id, formData)
          : await CreateMotoristas(formData);
      setErrorMessage(actionMessage);

      if (actionMessage.message !== "ok") {
        setLoading(false);
        return message;
      }

      router.push("/admin/config/motoristas");
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
    motoristas,
    onSubmitForm,
  };
}
