import create from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  newProduct: [],
  getHamburguesas: async () => {
    const response = await axios.get(`api/Productos`);
    set({ newProduct: response.data });
  },
}));

export default useStore;
