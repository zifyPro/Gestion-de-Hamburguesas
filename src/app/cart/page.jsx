"use client";
import Cards from "@/components/cards/Cards";
import MercadoPago from "@/components/mercadoPago/mercadoPago";
import useStore from "@/zustand/store";

const Cart = () => {
  const { cart } = useStore((state) => ({
    cart: state.cart,
  }));
  return (
    <>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <img src={product.img} />
            <h1>{product.price}</h1>
          </div>
        );
      })}
      <MercadoPago />
    </>
  );
};
export default Cart;
