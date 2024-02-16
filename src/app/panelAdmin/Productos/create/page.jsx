"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const CreateProduct = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    img: "",
    price: "",
    type: "",
  });

  //   const handleSubmit = () => {
  //     useEffect(() => {
  //       const fetch = async () => {
  //         const response = await axios.post("/api/Productos");
  //         const result = response.data;
  //         setData(result);
  //       };
  //       fetch();
  //     }, []);
  //   };
  return (
    <div className="flex flex-col bg-custom-gray w-2/4 mx-auto ">
      <form className="flex flex-col mx-auto">
        <label className="mt-4 text-gray-text font-semibold">
          <input
            type="text"
            placeholder="nombre de producto"
            value={data.title}
          />
        </label>
        <label className="mt-4 text-gray-text font-semibold">
          <input
            type="text"
            placeholder="description de producto"
            value={data.description}
          />
        </label>
        <label className="mt-4 text-gray-text font-semibold">
          <input type="text" placeholder="link de la imagen" value={data.img} />
        </label>
        <label className="mt-4 text-gray-text font-semibold">
          <input
            type="text"
            placeholder="precio del producto"
            value={data.price}
          />
        </label>
        <select className="mt-4 text-gray-text font-semibold">
          <option value={data.comida}>comida</option>
          <option value={data.bebida}>bebida</option>
          <option value={data.puntos}>puntos</option>
        </select>
        <button>Crear Producto</button>
      </form>
    </div>
  );
};
export default CreateProduct;
