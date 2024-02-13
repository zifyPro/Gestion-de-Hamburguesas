"use client";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState } from "react";
import axios from "axios";

const MercadoPago = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  console.log(preferenceId);
  initMercadoPago(process.env.REACT_APP_PUBLIC_KEY, {
    locale: "es-AR",
  });

  const pagos = async () => {
    const newPage = await axios.post("api/mercadoPago", {
      id: "",
      title: "hamburguesas",
      quantity: 1,
      price: 1.7,
    });
    console.log("holaaa", newPage);
    const { id } = await newPage.data;
    console.log(newPage.data);
    return id;
  };

  const handleOnClick = async () => {
    const id = await pagos();
    if (id) {
      setPreferenceId(id);
    }
    alert("holaa");
    setPreferenceId(1);
  };

  return (
    <>
      <div id="wallet_container">
        <div className="flex flex-col justify-center ">
          <h2>{pagos.title}</h2>
          <img className="w-48 " src="/descarga.jpeg" />
          <p>$1700</p>
          <button onClick={handleOnClick}> Comprar </button>
          {preferenceId && (
            <Wallet
              initialization={{ preferenceId: preferenceId }}
              customization={{ texts: { valueProp: "smart_option" } }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MercadoPago;
