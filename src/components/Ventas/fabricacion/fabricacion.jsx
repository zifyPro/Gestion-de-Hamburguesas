"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const Fabricacion = () => {
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
      {data.length === 0
        ? "no hay compras "
        : data
            .filter(
              (item) => item.estaDeProducto === "En proceso de fabricación"
            )
            .map((element) => {
              return (
                <div
                  key={element.id}
                  className=" bg-custom-gray  mx-auto mt-5 rounded-lg"
                >
                  <h1 className="w-60 mx-auto flex items-center justify-center text-gray-text font-semibold">
                    Nombres: {element.nombre}{" "}
                  </h1>
                  <h1 className="w-60 mx-auto  flex items-center justify-center text-gray-text font-semibold">
                    Orden: 0{element.numeroDeOrden}{" "}
                  </h1>
                </div>
              );
            })}
    </>
  );
};

export default Fabricacion;
