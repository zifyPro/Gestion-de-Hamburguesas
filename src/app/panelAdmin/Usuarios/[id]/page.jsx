"use client";
import axios from "axios";
import Link from "next/link";
import { GiTrophy } from "react-icons/gi";
import { IoMdArrowRoundBack } from "react-icons/io";

const Page = async ({ params }) => {
  const API_URL =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_URL_REQUESTS_USERS_LOCAL
      : process.env.NEXT_PUBLIC_URL_REQUESTS_USERS_DEPLOY;
  const response = await axios(`${API_URL}/${params.id}`);
  const user = response.data;
  console.log(user);

  user[0].ventas = user[0].ventas.map((venta) => {
    let precioTotal = 0;
    venta.productos.forEach((producto) => {
      precioTotal += producto.price;
    });
    return { ...venta, precioTotal: precioTotal };
  });

  return (
    <>
      <div className="flex flex-col justify-start bg-custom-gray mt-2 w-full sm:w-3/4  mx-auto rounded-lg">
        <button className="bg-red-800 mt-2 w-20 md:w-2/4 lg:w-32 rounded-lg h-10 hover:bg-red-600 font-sans block text-sm leading-5 mx-1 ">
          <Link href={"/panelAdmin/Usuarios"}>
            <IoMdArrowRoundBack className="transform scale-150 mx-auto" />
          </Link>
        </button>

        <div className="flex justify-center items-center bg-custom-gray mt-4 w-full text-gray-text font-semibold mb-2">
          <div className="flex flex-col  md:w-3/4">
            <div className="flex flex-row justify-around">
              <h1 className="text-3xl">{user[0].username}</h1>
              <div className="flex flex-row items-center text-3xl mb-2 ">
                <GiTrophy />
                <h1 className="ml-4">700</h1>
              </div>
            </div>
            <hr />

            <section className="juegosUd">
              {user[0].ventas.length > 0 ? (
                user[0].ventas.map((license) => (
                  <div
                    key={license.id}
                    className="grid grid-cols-[1fr,100px,100px] mt-5 justify-around "
                  >
                    <h1 className="m-2 truncate">
                      {license.productos.map(
                        (producto) => producto.title + "  "
                      )}
                    </h1>

                    <p className="m-2">${license.precioTotal}</p>
                    <p className="m-2"> 21/2/2024 </p>
                  </div>
                ))
              ) : (
                <p className="m-2">El usuario no realizo ninguna compra</p>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
