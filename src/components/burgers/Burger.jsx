"use client";
import React, { useEffect, useState } from "react";
import useStore from "../../zustand/store/index";
import Cards from "../cards/Cards";
import Foter from "../Foter/Foter";

const Burgers = () => {
  const product = useStore((state) => state.product);
  const getHamburguesas = useStore((state) => state.getHamburguesas);
  const [searchProduct, setSarchProduct] = useState(getHamburguesas);
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

  const HandlerFilter = (types) => {
    const newFiltrado = product.map((element) => element.type === types);
    setSarchProduct(newFiltrado);
  };

  return (
    <>
      <section className="bg-black rounded-lg w-[95vw] md:w-2/4 mx-auto">
        <div className="flex justify-center  h-5">
          <button
            onClick={() => {
              HandlerFilter("comida");
            }}
            className="bg-slate-800 hover:bg-slate-700  text-white rounded m-3 w-20 shadow-md md:w-24 md:m-20 h-10 font-sans font-semibold italic "
          >
            Burgers
          </button>
          <button
            onClick={() => {
              HandlerFilter("bebida");
            }}
            className="bg-slate-800 hover:bg-slate-700 text-white rounded m-3 w-20 shadow-md md:w-24 md:m-20 h-10 font-sans font-semibold italic "
          >
            Bebidas
          </button>
        </div>
      </section>
      {isLoading ? (
        <div className=" mt-48 flex flex-col items-center h-[65vh]">
          <div
            class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center h-[65vh]">
          <Cards product={setSarchProduct} />
          <Foter />
        </div>
      )}
    </>
  );
};

export default Burgers;
