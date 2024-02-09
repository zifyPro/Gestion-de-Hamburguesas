"use client";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import "tailwindcss/tailwind.css";

const Users = () => {
  const user = useUser();
  console.log("fffffff", user);
  const isLogin = user?.isSignedIn;

  const usuario = {
    img: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    name: "Pablo Valdez",
  };
  return (
    <>
      <div className=" absolute flex w-20  mx-7 my-6 br-20  scale-150">
        {isLogin ? (
          <>
            <UserButton
              className="rounded-full transform scale-125"
              afterSignOutUrl="/"
            />
            <h4
              className="font-sans font-semibold italic text-xs text-nowrap my-auto mx-2 "
            >
              {"Hola " + user.user.username +"!"}
            </h4>
          </>
        ) : (
             <a  href="/sign-in" className="  bg-yellow-500 font-bold text-black rounded-sm my-1.5 mx-1.5 place-content-center text-sm h-6.5 text-center transform scale-80 ">
          <p className="my-1">Ingresa</p>
        </a>
        )}
      </div>
      <a className="  bg-yellow-500 text-black font-bold py-2 px-4 rounded absolute top-5 right-5 place-content-center ">
        <img
          className="w-4 absolute place-content-center"
          src="https://cdn-icons-png.flaticon.com/512/263/263056.png"
          alt=""
        />
        __ Puntos
      </a>
    </>
  );
};

export default Users;
