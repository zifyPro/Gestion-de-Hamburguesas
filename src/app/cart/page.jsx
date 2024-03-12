"use client";
import MercadoPago from "@/components/mercadoPago/mercadoPago";
import useStore from "@/zustand/store";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, deleateProductToCart } = useStore((state) => ({
    cart: state.cart,
    deleateProductToCart: state.deleateProductToCart,
  }));

  const alertDetails = (product) => {
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
    <>
      <div className=" w-[95vw] md:w-2/4 flex justify-center flex-col items-center mx-auto  bg-gray-600 rounded-xl shadow-md overflow-hidden mx-20">
        {cart.map((product) => {
          return (
            <div
              key={product?.id}
              className="mx-auto bg-black rounded-xl shadow-md overflow-hidden w-[92vw] m-4 h-32 md:w-9/12"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <img
                    className="h-32 w-3/5 object-cover"
                    src={product?.img}
                    alt="Imagen de comida"
                  />
                </div>
                <div className="-ml-20 w-35">
                  <div className="uppercase tracking-wide text-gray-text font-semibold w-32 relative  text-lg text-nowrap	">
                    {product?.title}
                  </div>
                  <p className="mt-2 text-gray-500  h-13  line-clamp-3 w-6/12 md:w-4/12">
                    {product?.description}
                  </p>
                  <button
                    className="block text-lg leading-tight font-medium text-yellow-500 hover:underline -mt-1"
                    onClick={() => alertDetails(product)}
                  >
                    Leer más
                  </button>
                </div>
                <div className="mt-10 -ml-[15vw] ">
                  <div className="text-lg font-bold text-white sm:-mt-[6vh] -mt-[4.5vh] -ml-[7vh]  md:-mt-[3vh]">
                    {"$" + product?.price}
                  </div>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-5 rounded mt-[6.7vh] md:mt-10 -ml-[15vw] md:-ml-[3.3vw]"
                    onClick={() => deleateProductToCart(product?.id)}
                  >
                    {" "}
                    X
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <MercadoPago />
      </div>
    </>
  );
};
export default Cart;
