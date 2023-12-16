"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext(null);
export const UserProfile = () => {
  return useContext(UserContext);
};

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);
  const [salidas, setSalidas] = useState([]);
  const [totales, setTotales] = useState([]);
  const [salidasChange, setSalidasChange] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { VerifyUser, GetTotales } = await import("@/lib/GetData");
      const [userData, totales] = await Promise.all([
        VerifyUser(),
        GetTotales(),
      ]);
      setUser(userData);
      setTotales(totales);
      setSalidasChange(true);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (salidasChange) {
      const fetchData = async () => {
        const { GetSalidas } = await import("@/lib/GetData");
        const [salidasData] = await Promise.all([GetSalidas()]);
        setSalidas(salidasData);
        setSalidasChange(false);
      };
      fetchData();
    }
  }, [salidasChange]);

  return (
    <UserContext.Provider value={{ salidas, user, setSalidasChange, totales }}>
      {children}
    </UserContext.Provider>
  );
}
