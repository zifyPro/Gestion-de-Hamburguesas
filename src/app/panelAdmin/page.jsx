const PanelAdmin = () => {
  return (
    <div className="flex flex-col items-center bg-custom-gray mt-12 rounded-md w-11/12 mx-auto md:w-2/4">
      <div className="flex justify-around w-full">
        <button className=" text-gray-text font-semibold">
          <a href="/"> Atras</a>
        </button>
        <button className="flex justify-center  items-center p-6  text-gray-text font-semibold">
          <a href="/panelAdmin/Productos">Productos</a>
        </button>
        <button className="flex justify-center items-center p-4  text-gray-text font-semibold">
          <a href="/panelAdmin/Usuarios">Usuarios</a>
        </button>
        <button className="flex justify-center items-center p-2  text-gray-text font-semibold">
          <a href="/panelAdmin/Ventas">Ventas</a>
        </button>
      </div>
    </div>
  );
};
export default PanelAdmin;
