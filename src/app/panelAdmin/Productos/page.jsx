"use client";
import { useEffect, useState } from "react";
import useStore from "@/zustand/store";
import Link from "next/link";
import CardsAdmin from "@/components/cardsAdmin/cardsAdmin";

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
    <div className="list-item items-center ">
      <Link href="/panelAdmin/Productos/create">
        <button>Crear productos</button>
      </Link>
      <button
        onClick={() => {
          setFilter("comida");
        }}
        className="bg-slate-800 hover:bg-slate-700  text-white rounded m-3 w-20 shadow-md md:w-24 md:m-20 h-10 font-sans font-semibold italic "
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
        onClick={() => setFilter("all")}
        className="bg-slate-800 hover:bg-slate-700 text-white rounded m-3 w-20 shadow-md md:w-24 md:m-20 h-10 font-sans font-semibold italic "
      >
        todos
      </button>
      <div>
        <CardsAdmin product={product} />
      </div>
    </div>
  );
};
export default Productos;
