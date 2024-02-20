import create from "zustand";
import axios from "axios";
import Swal from "sweetalert2";

const useStore = create((set) => ({
  product: [],
  cart: [],
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

  addProductToCart: (producto) =>
    set((state) => {
      const newProductInCart = [...state.cart, producto];
      console.log(producto);
      Swal.fire({
        icon: "success",
        iconColor: "green",
        titleText: "produc ADD TO CART",
        background: "#333333",
        color: "#FF9500",
        html: '<span style="color: orange;"></span>',
      });
      console.log(newProductInCart);
      return { cart: newProductInCart };
    }),
}));

export default useStore;
