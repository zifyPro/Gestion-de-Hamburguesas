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
'use client';
import { useEffect } from 'react';
import useStore from '../../zustand/store/index';
import Cards from '../cards/Cards';
import Foter from "../Foter/Foter";

const Burgers = () => {
	const product = useStore((state) => state.product);
	const getHamburguesas = useStore((state) => state.getHamburguesas);

	useEffect(() => {
		getHamburguesas();
	}, []);

  return (
    <>
    <div className="flex flex-col items-center  h-[65vh]">
      <Cards product={product} />
      <Foter/>
    </div>
    </>
  );
};
export default Burgers;
