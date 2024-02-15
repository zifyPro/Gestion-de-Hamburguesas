"use client";
import axios from "axios";
import "./users.css";
import Link from "next/link";

const Page = async ({ params }) => {
  const API_URL =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_URL_REQUESTS_USERS_LOCAL
      : process.env.NEXT_PUBLIC_URL_REQUESTS_USERS_DEPLOY;
  const response = await axios(`${API_URL}/${params.id}`);
  const user = response.data;

  return (
    <>
      <div className="usersDetails">
        <div className="pepitoNombre">
          <h1>Nombre: {user[0].username}</h1>
          <p>Email: {user[0].email}</p>
        </div>

        <section className="juegosUd">
          <div className="mateconmote">
            {user[0].ventas.length > 0 ? (
              user[0].ventas.map((license) => (
                <div key={license.id}>
                  <p>ventas: {license.nombre}</p>
                  <p>productos: {license.producto.title}</p>{" "}
                </div>
              ))
            ) : (
              <p>El usuario no realizo ninguna compra</p>
            )}
          </div>
        </section>
        <Link href={"/panelAdmin/Usuarios"}>
          <button className="butonsled"> {" R ⬅ BACK   "} </button>
        </Link>
      </div>
    </>
  );
};
export default Page;
