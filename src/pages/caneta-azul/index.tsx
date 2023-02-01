import BaseButton from "@/components/BaseButton/BaseButton";
import { NextPage } from "next";

const CanetaAzulPage: NextPage = () => {
  return (
    <div>
      <h1>O Flávio é lindo</h1>
      <p>Olá mundo</p>
      <BaseButton variant={"filled"}>Confirmar o pedido</BaseButton>
    </div>
  );
};

export default CanetaAzulPage;
