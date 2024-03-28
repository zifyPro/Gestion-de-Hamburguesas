"use client";

import Despacho from "@/components/Ventas/despacho/despacho";
import Entregado from "@/components/Ventas/entregado/entregado";
import Fabricacion from "@/components/Ventas/fabricacion/fabricacion";

const Ventas = () => {
  return (
    <div className="bg-black">
      <div className=" bg-[#222] justify-around flex  md:flex-row ">
        <div>En Proceso:</div>
        <div>Despacho:</div>
        <div>Entregado:</div>
      </div>
      <div className="justify-around flex  md:flex-row">
        <div className="bg-green-600 flex flex-col">
          <Fabricacion />
        </div>

        <div className="bg-orange-600 flex flex-col">
          <Despacho />
        </div>

        <div className="bg-red-700 flex flex-col">
          <Entregado />
        </div>
      </div>
    </div>
  );
};

export default Ventas;
