"use client";
import MercadoPago from "@/components/mercadoPago/mercadoPago";
import useStore from "@/zustand/store";

const Cart = () => {
  const { cart, deleateProductToCart } = useStore((state) => ({
    cart: state.cart,
    deleateProductToCart: state.deleateProductToCart,
  }));

  return (
    <>
      <div className=" w-[95vh] md:w-2/3 mx-auto bg-custom-gray">
        {cart.map((product) => {
          return (
            <div key={product.id} className="bg-gray-600 w-3/4">
              <h2>{product.title}</h2>
              <img src={product.img} />
              <p>{product.price}</p>
              <button onClick={() => deleateProductToCart(product.id)}>
                {" "}
                eliminar
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
