const Card = (product) => {
  return (
    // <div className=" list-item items-center ">
    <div className=" mx-auto  text-gray-text font-semibold w-2/4 ">
      <div className=" bg-custom-gray w-2/3 mx-auto mt-5 rounded-lg">
        <h1 className="w-12 mx-auto  text-gray-text font-semibold">
          {product?.title}
        </h1>
        <img className="w-3/4 mx-auto rounded-lg" src={product?.img} />
        <h2 className="text-gray-500 font-sans font-semibold italic text-left ml-4 sm:text-xl m-4 text-xs">
          {product?.description}
        </h2>

        <div className="flex justify-between">
          <h1 className="  text-gray-text font-semibold ml-12 mt-2">
            {"$" + product?.price}{" "}
          </h1>
          <button className=" bg-black rounded-md  text-yellow-400 font-semibold mr-12 mb-2 mt-2">
            {" "}
            agregar al carrito
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default Card;
