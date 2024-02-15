const PanelAdmin = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4">esto es el panel administrador</h1>
      <div className="flex justify-around w-full">
        <button className="flex justify-center  items-center p-6">
          <a href="/panelAdmin/Productos">Productos</a>
        </button>
        <button className="flex justify-center items-center p-2">
          <a href="/panelAdmin/Usuarios">users</a>
        </button>
      </div>
    </div>
  );
};
export default PanelAdmin;
