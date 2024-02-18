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
import React, { useEffect, useState } from 'react'; // Import useState
import useStore from '../../zustand/store/index';
import Cards from '../cards/Cards';
import Foter from '../Foter/Foter';

const Burgers = () => {
  const product = useStore((state) => state.product);
  const getHamburguesas = useStore((state) => state.getHamburguesas);

  const [isLoading, setIsLoading] = useState(true); 
  useEffect(() => {
   
    getHamburguesas()
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); 
      });
  }, []);

  return (
    <>
      {isLoading ? ( 
        <div className=" mt-48 flex flex-col items-center h-[65vh]" >
<div
  class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
</div>


        </div>
      ) : (
        <div className="flex flex-col items-center h-[65vh]">
          <Cards product={product} />
          <Foter />
        </div>
      )}
    </>
  );
};

export default Burgers;

