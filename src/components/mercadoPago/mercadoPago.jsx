"use client";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState } from "react";
import useStore from "@/zustand/store";
import axios from "axios";

const Products = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const { cart } = useStore((state) => ({ cart: state.cart }));

  initMercadoPago(process.env.NEXT_PUBLIC_KEY, {
    locale: "es-AR",
  });

  const API_URL_MERCADO_PAGO =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_URL_REQUESTS_MERCADO_PAGO_LOCAL
      : process.env.NEXT_PUBLIC_PROD_URL_REQUESTS_MERCADO_PAGO_DEPLOY;

  const createPreference = async () => {
    try {
      const response = await axios.post(
        API_URL_MERCADO_PAGO,
        {
          items: cart.map((product) => ({
            title: product.title,
            quantity: product.quantity,
            price: product.price,
          })),
        },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response);
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div className=" w-[95vh] md:w-2/3 mx-auto bg-custom-gray">
      <button onClick={handleBuy}>comprar</button>
      {preferenceId && (
        <Wallet
          initialization={{ preferenceId: preferenceId }}
          customization={{ texts: { valueProp: "smart_option" } }}
        />
      )}
    </div>
  );
};

export default Products;
