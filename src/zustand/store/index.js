import create from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  product: [],
  filter: "all",
  getHamburguesas: async () => {
    const API_URL =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_URL_REQUESTS_PRODUCTOS_LOCAL
        : process.env.NEXT_PUBLIC__PROD_URL_REQUESTS_PRODUCTOS_DEPLOY;
    const response = await axios.get(API_URL);
    set({ product: response.data });
  },
  setFilter: (filter) => set({ filter }), // nueva función para cambiar el filtro
}));

export default useStore;
