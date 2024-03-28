"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import axios from "axios";

const Comanda = () => {
  const [data, setData] = useState([]);
  const user = useUser();
  const newId = user.user?.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_URL =
          process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_URL_REQUESTS_USERS_LOCAL
            : process.env.NEXT_PUBLIC_URL_REQUESTS_USERS_DEPLOY;
        const response = await axios(API_URL);
        const result = response.data;
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <>
      {data
        .filter((elem) => elem.user_id === newId)
        .map((elem) => {
          return (
            <div key={elem.id} className="bg-black ">
              <div className=" bg-[#222] justify-around flex  md:flex-row ">
                <div>Nombre:</div>
                <div>Estado de comanda:</div>
                <div>Producto:</div>
              </div>
              <div className="justify-around flex  md:flex-row">
                <div className=" flex flex-col">
                  <h1>{elem?.username}</h1>
                </div>
                <div className="flex flex-col">
                  <h1>{elem.ventas.map((elem) => elem.estaDeProducto)}</h1>
                </div>
                <div className="flex flex-col">
                  <h1>
                    {elem?.ventas.map((venta) =>
                      venta.productos.map((type) => type.title).join(", ")
                    )}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Comanda;
