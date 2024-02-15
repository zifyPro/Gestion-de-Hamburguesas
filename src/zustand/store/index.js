import create from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  product: [],
  getHamburguesas: async () => {
    const response = await axios.get(`api/Productos`);
    set({ product: response.data });
  },
}));

export default useStore;
