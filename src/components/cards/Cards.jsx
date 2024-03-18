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
    <div className=" rounded-lg  h-[80vh] overflow-scroll mt-10 md:mt-[12vh] md:w-3/4 md:overflow-x-hidden">
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