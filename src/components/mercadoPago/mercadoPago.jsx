"use client";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState } from "react";
import axios from "axios";

const Products = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago(process.env.NEXT_PUBLIC_KEY, {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/create_preference",
        {
          titlle: "hamburgesa",
          quantity: 1,
          price: 100,
        }
      );
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
    <div>
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
