import OutbondlongCard from "@/components/LogCardView";
import Solicitudes from "@/components/Solicitudes";

export default function Page() {
  return (
    <OutbondlongCard
      title={"Materiales solicitados"}
      subtitle={
        "Aquí se presenta la lista de solicitudes de materiales de los usuarios."
      }
    >
      <Solicitudes />
    </OutbondlongCard>
  );
}
