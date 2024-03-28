"use client";
import React, { useEffect, useState } from "react";
import { FaStore } from "react-icons/fa";
import useStore from "../../zustand/store/index";
import Cards from "../cards/Cards";
import Swal from "sweetalert2";
import Foter from "../Foter/Foter";

const Burgers = () => {
  const { getHamburguesas, setFilter, product, cart } = useStore((state) => ({
    getHamburguesas: state.getHamburguesas,
    setFilter: state.setFilter,
    product: state.product,
    cart: state.cart,
  }));

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getHamburguesas()
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="bg-custom-gray rounded-lg w-[95vw] md:w-2/4 mx-auto">
        <div className="flex justify-center  h-5 mb-15">
          <button
            onClick={() => {
              setFilter("comida");
            }}
            className="bg-slate-800 hover:bg-slate-700  text-white rounded m-3 w-20 shadow-md md:w-24 md:m-20 h-10 font-sans font-semibold italic  "
          >
            Burgers
          </button>
          <button
            onClick={() => setFilter("promos")}
            className="bg-slate-800 hover:bg-slate-700 text-white rounded m-3 w-20 shadow-md md:w-24 md:m-20 h-10 font-sans font-semibold italic "
          >
            promos
          </button>
          <button
            onClick={() => setFilter("bebidas")}
            className="bg-slate-800 hover:bg-slate-700 text-white rounded m-3 w-20 shadow-md md:w-24 md:m-20 h-10 font-sans font-semibold italic "
          >
            Bebidas
          </button>
        </div>
        {isLoading ? (
          <div className=" mt-48 flex flex-col items-center h-[65vh]">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center  pb-6">
            <div className="h-[8vh] md:h-[5.5vh] bg-red-500"></div>
            <Cards product={product} />
            <h1 className="flex justify-center mt-4 ">
              {" "}
              Productos a comprar : {cart.length}
            </h1>
            <a href="/cart">
              <div className="flex text-black justify-center w-64 mt-2  h-8 font-semibold  text-center text-2xl bg-yellow-400 rounded-lg ">
                Finalizar Compra
              </div>
            </a>
            <Foter />
          </div>
        )}
      </div>
    </>
  );
};

export default Burgers;
