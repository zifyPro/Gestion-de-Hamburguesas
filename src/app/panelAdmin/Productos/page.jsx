"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const Productos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fethData = async () => {
      const response = await axios.get("/api/Productos");
      const result = response.data;
      console.log(result);
      setData(result);
    };
    fethData();
  }, []);
  return (
    <div>
      <h1>aca estan los productos</h1>
      {data.length > 0 &&
        data.map((elem) => {
          return (
            <div>
              <h1>{elem.title}</h1>
              <img src={elem.img} alt={elem.title} />
            </div>
          );
        })}
    </div>
  );
};
export default Productos;
