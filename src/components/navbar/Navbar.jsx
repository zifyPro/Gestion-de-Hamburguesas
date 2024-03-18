"use client";
import React from "react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useOrganizationList } from "@clerk/nextjs";
import { UserButton, useUser } from "@clerk/nextjs";
import Menus from "../menu/Menu";


const Navbar = () => {
  const { organizationList, isLoaded } = useOrganizationList();
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
 
  return (
    <>
 




      <div className="flex flex- justify-around items-center pt-6 bg-custom-gray rounded-md mx-auto mt-3  w-11/12 h-12 md:w-2/4" >
        
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



<div  className="-mt-6 -mr-10">
        <Menus/>

</div>
      </div>
      <div className="flex justify-center items-center ">
        
          <img
            className="w-3/6 md:w-1/6 "
            src="/logo.png"
            alt="logo billiebob"
          />
      </div>
      {isAdmin && (
        <div className="flex flex- justify-around items-center pt-1">
          <Link className=" p-2 bg-custom-gray rounded-md" href="/panelAdmin">
            <button className=" text-yellow-500 font-semibold">panel administrador</button>
          </Link>
        </div>

      )}
    </>
  );
};
export default Navbar;
