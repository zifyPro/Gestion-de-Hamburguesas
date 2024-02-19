"use client";
import axios from "axios";
import { useState } from "react";

const CreateProduct = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
    img: "",
    type: "",
  });

  const handleEvent = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    event.preventDefault();
    const priceAsInt = parseInt(data.price);
    const dataWithIntPrice = { ...data, price: priceAsInt };
    const response = await axios.post("/api/Productos", dataWithIntPrice);
    return response;
  };



  return (
    <div className="flex flex-col bg-custom-gray w-2/4 mx-auto ">
      <form className="flex flex-col mx-auto">
        <label className="mt-4 text-gray-text font-semibold">
          <input
            type="text"
            placeholder="nombre de producto"
            name="title"
            value={data.title}
            onChange={handleEvent}
          />
        </label>
        <label className="mt-4 text-gray-text font-semibold">
          <input
            type="text"
            placeholder="description de producto"
            name="description"
            value={data.description}
            onChange={handleEvent}
          />
        </label>
        <label className="mt-4 text-gray-text font-semibold">
          <input
            type="text"
            placeholder="link de la imagen"
            name="img"
            value={data.img}
            onChange={handleEvent}
          />
        </label>
        <label className="mt-4 text-gray-text font-semibold">
          <input
            type="text"
            placeholder="precio del producto"
            name="price"
            value={data.price}
            onChange={handleEvent}
          />
        </label>
        <select
          className="mt-4 text-gray-text font-semibold"
          name="type"
          value={data.type}
          onChange={handleEvent}
        >
          <option value="definir">sin definir</option>
          <option value="comida">comida</option>
          <option value="bebidas">bebida</option>
          <option value="puntos">puntos</option>
        </select>
        <button onClick={handleSubmit}>Crear Producto</button>
      </form>
    </div>
  );
};
export default CreateProduct;