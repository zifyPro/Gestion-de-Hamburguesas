"use client";
import { FaClipboardList } from "react-icons/fa";
import { CiBoxes } from "react-icons/ci";
import { FaUsersGear } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { useOrganizationList } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const PanelAdmin = () => {
  const { organizationList, isLoaded } = useOrganizationList();
  const router = useRouter();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (isLoaded) {
      const adminOrganization = organizationList.find(
        (org) => org.membership.role === "org:admin"
      );
      if (
        !adminOrganization ||
        adminOrganization.membership.role !== "org:admin"
      ) {
        router.push("/");
      }
    }
    setTimeout(() => {
      setCount(1);
    }, 1500);
  }, [isLoaded, organizationList]);
  return (
    <section className="flex flex-col items-center bg-black mt-12 rounded-md w-11/12 mx-auto md:w-[60vw] md:md:h-[60vh] pt-2">
      <div className="grid grid-cols-2">
        <div className="flex list-items items-center p-2  text-gray-text font-semibold bg-custom-gray rounded-lg m-2 justify-center md:text-[3vw] text-[5vw]">
          <FaArrowLeft />
          <a href="/"> {"  Atras"}</a>
        </div>
        <div className="flex list-items items-center p-2  text-gray-text font-semibold bg-custom-gray rounded-lg m-2 h-[29vh] w-[39vw] md:w-[29vw] justify-center md:text-[3vw] text-[5vw]">
          <CiBoxes />

          <a href="/panelAdmin/Productos">{"  Productos"}</a>
        </div>
        <div className="flex list-items items-center p-2  text-gray-text font-semibold bg-custom-gray rounded-lg m-2 h-[27vh] justify-center md:text-[3vw] text-[5vw]">
          <FaUsersGear />

          <a href="/panelAdmin/Usuarios">{"  Usuarios"}</a>
        </div>
        <div className="flex list-items items-center p-2  text-gray-text font-semibold bg-custom-gray rounded-lg m-2 justify-center md:text-[3vw] text-[5vw]">
          <FaClipboardList />
          <a href="/panelAdmin/Ventas">{"  Ventas"}</a>
        </div>
      </div>
    </section>
  );
};
export default PanelAdmin;
