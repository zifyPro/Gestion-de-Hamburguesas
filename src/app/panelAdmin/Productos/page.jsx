"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import useStore from "@/zustand/store";
import Link from "next/link";
import Swal from "sweetalert2";
import Cards from "@/components/cards/Cards";

const Productos = () => {
  const [data, setData] = useState([]);
  const { getHamburguesas, setFilter, product } = useStore((state) => ({
    getHamburguesas: state.getHamburguesas,
    setFilter: state.setFilter,
    product: state.product,
  }));

  useEffect(() => {
    setData(getHamburguesas());
    // const fetch = async () => {
    //   const API_URL =
    //     process.env.NODE_ENV === "development"
    //       ? process.env.NEXT_PUBLIC_URL_REQUESTS_PRODUCTOS_LOCAL
    //       : process.env.NEXT_PUBLIC__PROD_URL_REQUESTS_PRODUCTOS_DEPLOY;
    //   const response = await axios.get(API_URL);
    //   const result = response.data;
    //   setData(result);
    // };
    // fetch();
  }, []);

  const deleteProduct = async (id) => {
    const API_URL_DELETE =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_URL_REQUESTS_PRODUCTOS_LOCAL
        : process.env.NEXT_PUBLIC__PROD_URL_REQUESTS_PRODUCTOS_DEPLOY;
    const response = await axios.delete(API_URL_DELETE, { data: { id } });
    const result = response.data;

    console.log(result);
    Swal.fire("Producto eliminado correctamente!").then(() => {
      location.reload();
    });
    return result;
  };

  const newFilter = product.filter(
    (p) => filter === "all" || p.type === filter
  );

  return (
    <div className="list-item items-center ">
      <Link href="/panelAdmin/Productos/create">
        <button>Crear productos</button>
      </Link>
      <button
        onClick={() => {
          setFilter("comida");
        }}
        className="bg-slate-800 hover:bg-slate-700  text-white rounded m-3 w-20 shadow-md md:w-24 md:m-20 h-10 font-sans font-semibold italic "
      >
        Burgers
      </button>
      <button
        onClick={() => setFilter("bebida")}
        className="bg-slate-800 hover:bg-slate-700 text-white rounded m-3 w-20 shadow-md md:w-24 md:m-20 h-10 font-sans font-semibold italic "
      >
        Bebidas
      </button>
      <button
        onClick={() => setFilter("all")}
        className="bg-slate-800 hover:bg-slate-700 text-white rounded m-3 w-20 shadow-md md:w-24 md:m-20 h-10 font-sans font-semibold italic "
      >
        todos
      </button>
      {newFilter.map((element) => {
        return (
          <div
            key={element.id}
            className=" bg-custom-gray w-2/3 mx-auto mt-5 rounded-lg"
          >
            <div>
              <button onClick={() => deleteProduct(element.id)}>delete</button>
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
      {/* <div>
        <Cards product={product} />
      </div> */}
    </div>
  );
};
export default Productos;
