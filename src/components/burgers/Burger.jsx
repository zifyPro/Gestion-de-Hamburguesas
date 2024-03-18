"use client";
import React, { useEffect, useState } from "react";
import useStore from "../../zustand/store/index";
import Cards from "../cards/Cards";
import Foter from "../Foter/Foter";

const Burgers = () => {
  const { getHamburguesas, setFilter, product } = useStore((state) => ({
    getHamburguesas: state.getHamburguesas,
    setFilter: state.setFilter,
    product: state.product,
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
            <div className="h-[6vh] md:h-[1.5vh]"></div>
            <Cards product={product} />
            <Foter />
          </div>
        )}
      </div>
    </>
  );
};

export default Burgers;
