"use client";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useOrganizationList } from "@clerk/nextjs";
import { UserButton, useUser } from "@clerk/nextjs";
import Menus from "../menu/Menu";
import axios from "axios";

const Navbar = () => {
  const { organizationList, isLoaded } = useOrganizationList();
  const [data, setData] = useState([]);
  let isAdmin = false;

  if (isLoaded) {
    const adminOrganization = organizationList.find(
      (org) => org.membership.role === "org:admin"
    );
    if (
      adminOrganization &&
      adminOrganization.membership.role === "org:admin"
    ) {
      isAdmin = true;
    }
  }

  const user = useUser();
  const isLogin = user?.isSignedIn;

  useEffect(() => {
    const fetch = async () => {
      const API_URL =
        process.env.NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_URL_REQUESTS_TIENDA_LOCAL
          : process.env.NEXT_PUBLIC__PROD_URL_REQUESTS_TIENDA_DEPLOY;
      const response = await axios.get(API_URL);
      const result = response.data;
      setData(result);
    };
    fetch();
  }, []);

  return (
    <>
      <div className="flex flex- justify-around items-center pt-6 bg-custom-gray rounded-md mx-auto mt-3  w-11/12 h-12 md:w-2/4">
        <div className="flex items-center -ml-10 -mt-6">
          {isLogin ? (
            <>
              <UserButton
                className="rounded-full items-center  "
                afterSignOutUrl="/"
              />
              <h4 className="font-sans font-semibold italic text-xs text-nowrap my-auto mx-2 ">
                {"Hola " + user.user.username + "!"}
              </h4>
            </>
          ) : (
            <a
              href="/sign-in"
              className="   text-white rounded-sm my-1.5 mx-1.5 place-content-center text-sm h-6.5 text-center "
            >
              <FaUser />
            </a>
          )}
        </div>
        <div>
          {data.map((elem) => {
            return elem?.active === true ? (
              <div
                key={elem.id}
                className="bg-green-500 text-white text-center py-1 px-3 md:mt-[-4vh] rounded shadow-lg"
              >
                abierto
              </div>
            ) : (
              <div
                key={elem.id}
                className="bg-red-500 text-white text-center py-1 px-3 rounded shadow-lg"
              >
                cerrado
              </div>
            );
          })}
        </div>
        <div className="-mt-6 -mr-10">
          <Menus />
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <img
          className="w-3/6 md:w-1/6 "
          src="https://res.cloudinary.com/divxrmzge/image/upload/v1711388193/logo_ti2r2d.png"
          alt="logo billiebob"
        />
      </div>
      {isAdmin && (
        <div className="flex flex- justify-around items-center pt-1">
          <Link className=" p-2 bg-custom-gray rounded-md" href="/panelAdmin">
            <button className=" text-yellow-500 font-semibold">
              panel administrador
            </button>
          </Link>
        </div>
      )}
    </>
  );
};
export default Navbar;
