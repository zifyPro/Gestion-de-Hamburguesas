"use client";
import React from "react";
import { GiTrophy } from "react-icons/gi";
import Users from "../Users/Users";
import Link from "next/link";
// import { useOrganization, useOrganizationList } from "@clerk/nextjs";

const Navbar = () => {
  // const { organizationList, isLoaded } = useOrganizationList();
  // let isAdmin = false;
  // console.log(useOrganizationList);

  // if (isLoaded) {
  //   const adminOrganization = organizationList.find(
  //     (org) => org.membership.role === "admin"
  //   );
  //   if (adminOrganization && adminOrganization.membership.role === "admin") {
  //     isAdmin = true;
  //   }
  // }

  return (
    <>
      <div className="flex flex- justify-around items-center pt-6">
        <Users />
        <button className=" text-white scale-150 flex flex-row">
          <a className="flex flex-row items-center font-sans font-semibold italic text-xs text-nowrap my-auto mx-2 ">
            <GiTrophy className="w-10 h-5 text-white " />
            700
          </a>
        </button>
      </div>
      <div className="flex justify-center items-center ">
        <Link href="/">
          <img
            className="w-1/3 md:w-1/6"
            src="/logo.png"
            alt="logo billiebob"
          />
        </Link>
      </div>
      {/* {isAdmin && ( */}
      <div className="flex flex- justify-around items-center pt-4">
        <Link href="/panelAdmin">
          <button>panel administrador</button>
        </Link>
      </div>
      {/* )} */}
    </>
  );
};
export default Navbar;
