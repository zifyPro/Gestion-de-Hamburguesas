"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const Ventas = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const API_URL =
        process.env.NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_URL_REQUESTS_VENTAS_LOCAL
          : process.env.NEXT_PUBLIC__PROD_URL_REQUESTS_VENTAS_DEPLOY;
      const response = await axios.get(API_URL);
      const result = response.data;
      setData(result);
    };
    fetch();
  }, []);
  return (
    <>
      <h1>hola estan son las ventas</h1>
    </>
  );
};

export default Ventas;
