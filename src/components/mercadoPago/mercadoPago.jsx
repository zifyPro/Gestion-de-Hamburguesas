"use client";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState } from "react";
import axios from "axios";

const Products = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago(process.env.NEXT_PUBLIC_KEY, {
    locale: "es-AR",
  });

  const API_URL_MERCADO_PAGO =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_URL_REQUESTS_MERCADO_PAGO_LOCAL
      : process.env.NEXT_PUBLIC_URL_REQUESTS_MERCADO_PAGO_DEPLOY;
  const createPreference = async () => {
    try {
      const response = await axios.post(API_URL_MERCADO_PAGO, {
        titlle: "hamburgesa",
        quantity: 1,
        price: 100,
      });
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
    <div class="flex flex-col items-center justify-center h-screen">
      <h2>Hamburguesas</h2>
      <img src="/descarga.jpeg" />
      <p class="text-center">$2000</p>
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
