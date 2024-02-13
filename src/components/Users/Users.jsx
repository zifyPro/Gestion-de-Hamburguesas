"use client";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import "tailwindcss/tailwind.css";

const Users = () => {
  const user = useUser();
  const isLogin = user?.isSignedIn;

  const usuario = {
    img: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    name: "Pablo Valdez",
  };
  return (
    <>
      <div className="w-20 scale-150 flex items-center">
        {isLogin ? (
          <>
            <UserButton
              className="rounded-full transform scale-125"
              afterSignOutUrl="/"
            />
            <h4 className="font-sans font-semibold italic text-xs text-nowrap my-auto mx-2 ">
              {"Hola " + user.user.username + "!"}
            </h4>
          </>
        ) : (
          <a
            href="/sign-in"
            className="   bg-slate-800 text-white rounded-sm my-1.5 mx-1.5 place-content-center text-sm h-6.5 text-center transform scale-80 "
          >
            <p className="my-1">Ingresa</p>
          </a>
        )}
      </div>
    </>
  );
};

export default Users;
