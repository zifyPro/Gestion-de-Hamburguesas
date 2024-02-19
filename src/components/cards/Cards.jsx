"use client";
import useStore from "../../zustand/store/index";
import Card from "../card/card";

const Cards = () => {
  const { product, filter } = useStore((state) => ({
    product: state.product,
    filter: state.filter,
  })); // obtén el producto y el filtro del estado

  const filteredProduct = product.filter(
    (p) => filter === "all" || p.type === filter
  );
  return (
    <div className=" mt-20 rounded-lg  h-[50vh] overflow-scroll md:mt-28 md:w-3/4 md:overflow-x-hidden">
      {filteredProduct.map((product) => (
        <Card
          key={product?.id}
          id={product?.id}
          title={product?.title}
          description={product?.description}
          price={product?.price}
          img={product?.img}
          type={product?.type}
        />
      ))}
    </div>
  );
};
export default Cards;