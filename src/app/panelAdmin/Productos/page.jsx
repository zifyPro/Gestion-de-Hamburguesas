"use client";

import Burgers from "@/components/burgers/Burger";
import axios from "axios";
import Result from "postcss/lib/result";
import { useEffect, useState } from "react";

const Productos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("/api/Productos");
      const result = response.data;
      setData(result);
    };
    fetch();
  }, []);

  return (
    <div className="list-item items-center ">
      <h1 className="mx-auto  text-gray-text font-semibold w-36 ">
        Lista de productos
      </h1>
      {data.map((element) => {
        return (
          <div
            key={element.id}
            className=" bg-custom-gray w-2/3 mx-auto mt-5 rounded-lg"
          >
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
