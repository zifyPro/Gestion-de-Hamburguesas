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
      <div className=" flex justify-center flex-col items-center">
        {cart.map((product) => {
          return (
            <div key={product.id} className="bg-gray-600 w-3/4">
              <h2>{product.title}</h2>
              <img className="h-22 w-2/4 object-cover" src={product.img} />
              <p className="flex justify-center -ml-[-32vh]">
                {"$" + product?.price}
              </p>
              <button
                className="flex justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded mt-[6.7vh] md:mt-10 -ml-[-7vh]"
                onClick={() => deleteProduct(product?.id)}
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
