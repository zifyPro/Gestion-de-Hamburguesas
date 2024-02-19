"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

const Productos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const API_URL =
        process.env.NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_URL_REQUESTS_PRODUCTOS_LOCAL
          : process.env.NEXT_PUBLIC__PROD_URL_REQUESTS_PRODUCTOS_DEPLOY;
      const response = await axios.get(API_URL);
      const result = response.data;
      setData(result);
    };
    fetch();
  }, []);

  const deleteProduct = async (element) => {
    const API_URL_DELETE =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_URL_REQUESTS_PRODUCTOS_LOCAL
        : process.env.NEXT_PUBLIC__PROD_URL_REQUESTS_PRODUCTOS_DEPLOY;
    const response = await axios.delete(API_URL_DELETE, element);
    const result = response.data;
    Swal.fire("SweetAlert2 is working!");
    return result;
  };

  return (
    <div className="list-item items-center ">
      <Link href="/panelAdmin/Productos/create">
        <button>Crear productos</button>
      </Link>
      {data.map((element) => {
        return (
          <div
            key={element.id}
            className=" bg-custom-gray w-2/3 mx-auto mt-5 rounded-lg"
          >
            <div>
              <button onClick={deleteProduct}>delete</button>
            </div>
            <h1 className="w-12 mx-auto  text-gray-text font-semibold">
              {element.title}{" "}
            </h1>
            <img
              className=" w-3/4 mx-auto rounded-lg"
              src={element.img}
              alt={element.title}
            />
            <div className="flex justify-between">
              <h1 className="  text-gray-text font-semibold ml-12 mt-2">
                {"$" + element.price}{" "}
              </h1>
              <button className=" bg-black rounded-md  text-yellow-400 font-semibold mr-12 mb-2 mt-2">
                {" "}
                Editar
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Productos;
