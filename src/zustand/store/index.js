import create from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  product: [],
  filter: "all",
  getHamburguesas: async () => {
    const response = await axios.get(`api/Productos`);
    set({ product: response.data });
  },
  setFilter: (filter) => set({ filter }), // nueva función para cambiar el filtro
}));

export default useStore;
