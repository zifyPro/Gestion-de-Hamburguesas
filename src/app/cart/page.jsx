"use client";
import MercadoPago from "@/components/mercadoPago/mercadoPago";
import useStore from "@/zustand/store";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const { cart, deleateProductToCart } = useStore((state) => ({
    cart: state.cart,
    deleateProductToCart: state.deleateProductToCart,
  }));

  return (
    <>
      <div className=" flex justify-center flex-col items-center mx-auto  bg-gray-600 rounded-xl shadow-md overflow-hidden mx-20">
        {cart.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-black w-120 h-50vh box-border m-2 rounded-lg"
            >
              <h2>{product.title}</h2>
              <img className="h-32 w-5/8 object-cover" src={product.img} />
              <p className="text-lg font-bold text-white sm:-mt-[6vh] -mt-[4.5vh] -ml-[-120vh]  md:-mt-[15vh]">
                {"$" + product?.price}
              </p>
              <button
                className="flex justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded mt-[6.7vh] md:mt-30 -ml-[-120vh]"
                onClick={() => deleateProductToCart(product?.id)}
              >
                <MdDeleteForever />
              </button>
            </div>
          );
        })}
        <MercadoPago />
      </div>
    </>
  );
};
export default Cart;
