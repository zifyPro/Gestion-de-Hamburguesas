// import { DataBurgers } from "@/app/dataPrueba";
// import Cards from "../cards/Cards";

// const Burgers = () => {
//   return (
//     <div>
//       <Cards data={DataBurgers} />
//     </div>
//   );
// };
// export default Burgers;
"use client";
import { useEffect } from "react";
import useStore from "../../zustand/store/index";
import Cards from "../cards/Cards";

const Burgers = () => {
  const newProduct = useStore((state) => state.newProduct);
  const getHamburguesas = useStore((state) => state.getHamburguesas);

  useEffect(() => {
    getHamburguesas();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Cards newProduct={newProduct} />
    </div>
  );
};
export default Burgers;
