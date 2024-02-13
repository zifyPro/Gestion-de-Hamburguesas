"use client";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState } from "react";
import axios from "axios";

const MercadoPago = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  console.log(preferenceId);
  initMercadoPago(process.env.PUBLIC_KEY);

  const pagos = async () => {
    const newPage = await axios.post("api/mercadoPago", {
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
      console.log(setPreferenceId(id));
      alert("holaa");
    }
  };

  return (
    <>
      <div id="wallet_container"></div>
      <h2>Hamburguesas</h2>
      <img src="/https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg" />
      <p>$1700</p>
      <button onClick={handleOnClick}> Comprar </button>
      {preferenceId && (
        <Wallet
          initialization={{ preferenceId: preferenceId }}
          customization={{ texts: { valueProp: "smart_option" } }}
        />
      )}
    </>
  );
};

export default MercadoPago;
