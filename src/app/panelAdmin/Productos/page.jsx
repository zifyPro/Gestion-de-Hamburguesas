"use client";
import { useEffect, useState } from "react";
import useStore from "@/zustand/store";
import Link from "next/link";
import CardsAdmin from "@/components/cardsAdmin/cardsAdmin";
import { IoMdAddCircle } from "react-icons/io";

const Productos = () => {
  const [data, setData] = useState([]);
  const { getHamburguesas, setFilter, product } = useStore((state) => ({
    getHamburguesas: state.getHamburguesas,
    setFilter: state.setFilter,
    product: state.product,
  }));

  useEffect(() => {
    setData(getHamburguesas());
  }, []);

  return (
    <div className="list-ite md:w-3/4 w-[95vw]   bg-custom-gray mx-auto  rounded-xl ">
      <div className="md:w-2/3 mx-auto" >

      <button
        onClick={() => {
          setFilter("comida");
        }}
        className="bg-slate-800 hover:bg-slate-700  text-white rounded m-3 w-20 shadow-md md:w-24 md:ml-10 h-10 font-sans font-semibold italic "
      >
        Burgers
      </button>
      <button
        onClick={() => setFilter("bebida")}
        className="bg-slate-800 hover:bg-slate-700 text-white rounded m-3 w-20 shadow-md md:w-24 md:m-20 h-10 font-sans font-semibold italic "
      >
        Bebidas
      </button>
      <button
        onClick={() => setFilter("promos")}
        className="bg-slate-800 hover:bg-slate-700 text-white rounded m-3 w-20 shadow-md md:w-24 md:m-20 h-10 font-sans font-semibold italic "
      >
        promos
      </button>

      <Link href="/panelAdmin/Productos/create">
        <button className="bg-green-700 hover:bg-slate-700 text-white rounded ml-3 w-[10vw] shadow-md md:w-24 md:m-20 h-10 font-sans font-semibold italic ">
          <IoMdAddCircle className="mx-auto " />
        </button>
      </Link>
          </div>

      <div>
        <CardsAdmin product={product} />
      </div>
    </div>
  );
};
export default Productos;
