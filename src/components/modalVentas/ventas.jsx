"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

const VentasId = ({ params }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const API_URL =
        process.env.NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_URL_REQUESTS_VENTAS_LOCAL
          : process.env.NEXT_PUBLIC__PROD_URL_REQUESTS_VENTAS_DEPLOY;
      const response = await axios.get(`${API_URL}/${params.id}`);
      const result = response.data;
      setData(result);
    };
    fetch();
  }, []);

  const handleEvent = (event) => {
    const { name, value } = event.target;
    const newData = [...data];
    newData[0] = { ...newData[0], [name]: value };
    setData(newData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const API_URL =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_URL_REQUESTS_VENTAS_LOCAL
        : process.env.NEXT_PUBLIC__PROD_URL_REQUESTS_VENTAS_DEPLOY;
    try {
      await axios.put(API_URL, data);
      Swal.fire({
        title: `${data[0]?.nombre}`,
        text: "Se editó correctamente",
        icon: "success",
        background: "#19191A", // fondo negro
        color: "#A2A2A3", // texto blanco
      });
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  const inputClassName =
    "font-sans block text-sm leading-5 ml-1 w-11/12 py-2 px-3 border-2 border-cyan-600 text-slate-500 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-cyan-200 focus:border-cyan-500 dark:text-slate-400 dark:placeholder:text-slate-600 dark:bg-custom-gray dark:border-cyan-500 dark:focus:ring-cyan-900 dark:focus:border-cyan-600";

  return (
    <div>
      {data && data.length > 0 && (
        <div className="flex flex-col bg-custom-gray sm:w-3/4 md:w-2/4 mx-auto mt-2 rounded-lg">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col mx-auto md:w-2/5"
          >
            <div>
              <label className="mt-4 text-gray-text font-semibold">
                Nombre:
                <input
                  type="text"
                  value={data[0]?.nombre}
                  className={`${inputClassName}`}
                />
              </label>
              <label className="mt-4 text-gray-text font-semibold">
                Telefono:
                <input
                  type="text"
                  value={data[0]?.telefono}
                  className={`${inputClassName}`}
                />
              </label>
              <label className="mt-4 text-gray-text font-semibold">
                Direccion:
                <input
                  type="text"
                  value={data[0]?.direccion}
                  className={`${inputClassName}`}
                />
              </label>
              <label className="mt-4 text-gray-text font-semibold">
                Orden:
                <input
                  type="text"
                  value={data[0]?.numeroDeOrden}
                  className={`${inputClassName}`}
                />
              </label>
              Estado del producto:
              <select
                name="estaDeProducto "
                value={data[0]?.estaDeProducto}
                onChange={handleEvent}
                className={`${inputClassName} mt-4`}
              >
                <option value="En proceso de fabricación">
                  En proceso de fabricación
                </option>
                <option value="Listo para el despacho">
                  Listo para el despacho
                </option>
                <option value="Entregado al cliente">
                  Entregado al cliente
                </option>
              </select>
              <label className="mt-4 text-gray-text font-semibold">
                compra realizada:
                <input
                  type="text"
                  value={data[0]?.compraRealizada}
                  className={`${inputClassName}`}
                />
              </label>
              <label className="mt-4 text-gray-text font-semibold">
                Producto:
                <input
                  type="text"
                  value={data[0]?.productos.map((elem) => elem?.title)}
                  className={`${inputClassName}`}
                />
              </label>
              <div className="flex items-center justify-center mb-2 mx-auto">
                <button className="bg-red-800 mt-4 w-2/4 lg:w-32 rounded-lg h-10 hover:bg-red-600 font-sans block text-sm leading-5 mx-1">
                  <Link href={"/panelAdmin/Ventas"}>Regresar</Link>
                </button>
                <button
                  type="submit"
                  className="bg-sky-800 mt-4 w-2/4 lg:w-32 rounded-lg h-10 hover:bg-sky-600 font-sans block text-sm leading-5"
                >
                  Actualizar
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default VentasId;
