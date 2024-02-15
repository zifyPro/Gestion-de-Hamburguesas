"use client";
import { useRouter } from "next/navigation";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const PanelAdmin = () => {
  //   const { organizationList, isLoaded } = useOrganizationList();
  //   const router = useRouter();
  //   const [count, setCount] = useState(0);
  //   console.log(useOrganizationList);
  //   console.log("oooooo", isLoaded);
  //   useEffect(() => {
  //     if (isLoaded) {
  //       const adminOrganization = organizationList.find(
  //         (org) => org.membership.role === "admin"
  //       );
  //       if (!adminOrganization || adminOrganization.membership.role !== "admin") {
  //         router.push("/");
  //       }
  //     }
  //     setTimeout(() => {
  //       setCount(1);
  //     }, 1500);
  //   }, [isLoaded, organizationList]);
  return (
    <>
      <h1>esto es el panel administrador</h1>

      <button>
        <a href="/panelAdmin/Usuarios">users</a>
      </button>
    </>
  );
};
export default PanelAdmin;
