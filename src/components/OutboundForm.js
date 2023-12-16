"use client";
import Datepicker from "./Datepicker";
import Link from "next/link";
import Dropdown from "./Dropdown";
import SearchProducts from "./SearchProducts";
import { UserProfile } from "../context/User";
import { OutboundFormState } from "../controller/OutboundFormState";
import OutbondlongCard from "./LogCardView";

export default function OutboundForm() {
  const {
    formState,
    setFormState,
    onClickSiguiente,
    dataDestinations,
    dataMotoristas,
    dataLocations,
    Newsolicitud,
  } = OutboundFormState();
  const { user } = UserProfile();
  const setUser = {};

  if (user !== null) {
    const { id } = user;
    setUser.Iduser = id;
  }
  return (
    <>
      {formState.showNextForm ? (
        <>
          <Link
            href="/admin/salidas"
            onClick={Newsolicitud}
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              className="flex-shrink-0 w-6 h-6 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M8.58598 4.58594L16.0003 12.0002L8.58615 19.4144L8.58608 13.0003L3.00002 13.0004L3 11.0004L8.58605 11.0003L8.58598 4.58594ZM18.0001 19.0002L18.0001 5.00018H20.0001L20.0001 19.0002H18.0001Z"
                fill="rgba(31,179,33,1)"
              ></path>
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap">
              Comenzar una Nueva Solicitud
            </span>
          </Link>
          <OutbondlongCard
            title={"Encabezados de la Solicitud"}
            fecha={formState.startDate}
            motorista={formState.selectedMotorista}
            destino={formState.selectedDestino}
          >
            <Dropdown
              text={"Selecione un sistema"}
              id="Sistema"
              value={formState.selectedSistema}
              onChange={(e) =>
                setFormState({ ...formState, selectedSistema: e.target.value })
              }
              options={dataLocations}
            />

            <SearchProducts
              fecha={formState.startDate}
              motorista={formState.selectedMotorista}
              destino={formState.selectedDestino}
              sistema={formState.selectedSistema}
              userId={setUser.Iduser}
            />
          </OutbondlongCard>
        </>
      ) : (
        <>
          <OutbondlongCard
            title={"Solicitud de materiales"}
            subtitle={" Optimiza la gestión de materiales con estos pasos."}
          >
            <Datepicker
              label={"Selecione una Fecha"}
              value={formState.startDate}
              onChange={(e) =>
                setFormState({ ...formState, startDate: e.target.value })
              }
            />

            <Dropdown
              text={"Selecione un Destino"}
              id="Destino"
              value={formState.selectedDestino}
              onChange={(e) =>
                setFormState({ ...formState, selectedDestino: e.target.value })
              }
              options={dataDestinations}
            />
            <Dropdown
              text={"Selecione un Motorista"}
              id="Motorista"
              value={formState.selectedMotorista}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  selectedMotorista: e.target.value,
                })
              }
              options={dataMotoristas}
            />

            <button
              type="button"
              onClick={onClickSiguiente}
              disabled={
                formState.selectedMotorista === "" ||
                formState.selectedDestino === ""
              }
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Siguiente
            </button>
          </OutbondlongCard>
        </>
      )}
    </>
  );
}
