const NewProductPuntos = ({ product }) => {
  return (
    <div>
      {product
        .filter((item) => item.type === "puntos")
        .map((filteredItem) => (
          <div key={filteredItem.id}>
            <h2>{filteredItem.title}</h2>
            <h2>{filteredItem.description}</h2>
            <img src={filteredItem.img} />
            <h2>{filteredItem.price}</h2>
          </div>
        ))}
    </div>
  );
};
export default NewProductPuntos;
