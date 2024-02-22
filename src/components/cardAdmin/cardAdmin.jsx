import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import Link from "next/link";

const CardAdmin = (product) => {
  const deleteProduct = async (id) => {
    const API_URL_DELETE =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_URL_REQUESTS_PRODUCTOS_LOCAL
        : process.env.NEXT_PUBLIC__PROD_URL_REQUESTS_PRODUCTOS_DEPLOY;
    const response = await axios.delete(API_URL_DELETE, { data: { id } });
    const result = response.data;
    Swal.fire({
      position: "center",
      icon: "success",
      title: product.title + " se elimino correctamente",
      showConfirmButton: false,
      timer: 1500,
      background: "#19191A", // fondo negro
      color: "#A2A2A3", // texto blanco
    });
    return result;
  };

  return (
    <div className="mx-auto bg-black rounded-xl shadow-md overflow-hidden w-[92vw] m-4 h-32 md:w-11/12">
      <div className="flex">
        <div className="flex-shrink-0">
          <img
            className="h-32 w-3/5 object-cover"
            src={product?.img}
            alt="Imagen de comida"
          />
        </div>
        <div className="-ml-20 w-35">
          <div className="uppercase tracking-wide text-gray-text font-semibold w-32 relative  text-lg text-nowrap	">
            {product?.title}
          </div>
          <p className="mt-2 text-gray-500  h-13  line-clamp-3 w-6/12 md:w-4/12">
            {product?.description}
          </p>
        </div>
        <div className="mt-10 -ml-[15vw] ">
          <div className="text-lg font-bold text-white sm:-mt-[6vh] -mt-[4.5vh] -ml-[7vh]  md:-mt-[3vh]">
            {"$" + product?.price}
          </div>
          <Link href={`/panelAdmin/Productos/${product?.id}`}>
            <button className="my-auto">editar</button>
          </Link>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-[6.7vh] md:mt-10 -ml-[7vh]"
            onClick={() => deleteProduct(product?.id)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardAdmin;
