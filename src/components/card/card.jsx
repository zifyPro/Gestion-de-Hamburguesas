const Card = (product) => {
  return (
    <div className=" flex justify-center ">
      <div className=" bg-white  lg:w-5/5 shadow-md m-5 rounded-lg flex flex-row justify-between h-1/3 w-1/3">
        <div className=" flex flex-col w-auto">
          <h1 className="text-black font-sans font-semibold italic text-left ml-4 sm:text-5xl m-5 text-xl">
            {product?.title}
          </h1>
          <img className="w-66 h-66 p-8" src={product?.img} />
          <h2 className="text-gray-500 font-sans font-semibold italic text-left ml-4 sm:text-xl m-4 text-xs">
            {product?.description}
          </h2>
          <p className="text-black font-sans font-semibold italic text-left ml-4 sm:text-xl m-4 text-xs">
            ${product?.price}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
