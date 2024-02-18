// import CardItem from '../cardItem/CardItem';

// const Cards = ({ data }) => {
// 	return (
// 		<div>
// 			{data.map((item) => (
// 				<CardItem key={item.id} item={{ ...item }} />
// 			))}
// 		</div>
// 	);
// };
// export default Cards;
"use client";
import Card from "../card/card";

const Cards = ({ product }) => {
  return (
    <div  className="pepe2 mt-20 rounded-lg  h-[50vh] overflow-scroll">
      {product.map((product) => (
        <Card
          key={product?.id}
          id={product?.id}
          title={product?.title}
          description={product?.description}
          price={product?.price}
          img={product?.img}
        />
      ))}
    </div>
  );
};
export default Cards;
