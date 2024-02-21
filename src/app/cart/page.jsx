"use client";
import Cards from "@/components/cards/Cards";
import MercadoPago from "@/components/mercadoPago/mercadoPago";
import useStore from "@/zustand/store";
import { useEffect } from "react";

const Cart = () => {

  const { cart,deleateProductToCart } = useStore((state) => ({
    cart: state.cart,
    deleateProductToCart:state.deleateProductToCart,
  }));


  return (
    <>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.img} />
            <p>{product.price}</p>
            <button onClick={()=> deleateProductToCart(product.id)}> eliminar</button>
          </div>
        );
      })}
      <MercadoPago />
    </>
  );
};
export default Cart;
