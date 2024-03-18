"use client";
import useStore from "@/zustand/store";
import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import Swal from "sweetalert2";

const NewProductPuntos = () => {
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

  const handlerBuy = () => {
    addProductToCart(product);
  };

  const alertDetails = () => {
    Swal.fire({
      title: product.title,
      text: product.description,
      imageUrl: product.img,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: product.title,
      background: "#19191A", // fondo negro
      color: "#A2A2A3", // texto blanco
    });
  };
  return (
    <div>
      {product
        .filter((item) => item.type === "puntos")
        .map((filteredItem) => (
          <div
            key={filteredItem?.id}
            className="mx-auto bg-black rounded-xl shadow-md overflow-hidden w-[92vw] m-4 h-32 md:w-11/12"
          >
            <div className="flex">
              <div className="flex-shrink-0">
                <img
                  className="h-32 w-7/5 object-cover"
                  src={filteredItem?.img}
                  alt="Imagen de comida"
                />
              </div>
              <div className="ml-5 w-35">
                <div className="uppercase tracking-wide text-gray-text font-semibold w-32 relative  text-lg text-nowrap	">
                  {filteredItem?.title}
                </div>
                <p className="mt-2 text-gray-500  h-13  line-clamp-3 w-6/12 md:w-5/12">
                  {filteredItem?.description}
                </p>
                <button
                  className="block text-lg leading-tight font-medium text-yellow-500 hover:underline -mt-1"
                  onClick={alertDetails}
                >
                  Leer más
                </button>
              </div>
              <div className="ml-auto mr-4 mt-2">
                <div className="text-lg font-bold text-white">
                  {"$" + filteredItem?.price}
                </div>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-12"
                  onClick={handlerBuy}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default NewProductPuntos;
