"use client";
import { create } from "zustand";
import axios from "axios";
import Swal from "sweetalert2";

const useStore = create(
  (set) => ({
    product: [],
    cart:
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("cart")) || []
        : [],
    filter: "all",
    getHamburguesas: async () => {
      const API_URL =
        process.env.NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_URL_REQUESTS_PRODUCTOS_LOCAL
          : process.env.NEXT_PUBLIC__PROD_URL_REQUESTS_PRODUCTOS_DEPLOY;
      const response = await axios.get(API_URL);
      set({ product: response.data });
    },
    setFilter: (filter) => set({ filter }),
    addProductToCart: (producto) =>
      set((state) => {
        let newProductInCart = [...state.cart, producto];

        Swal.fire({
          icon: "success",
          iconColor: "green",
          titleText: "producto agregado a tu lista de compra",
          background: "#333333",
          color: "#FF9500",
          html: '<span style="color: orange;"></span>',
        });

        localStorage.setItem("cart", JSON.stringify(newProductInCart));
        return { cart: newProductInCart };
      }),

    deleateProductToCart: (id) =>
      set((state) => {
        const cart2 = [...state.cart];
        const sameIdCount = cart2.filter((item) => item.id === id).length;

        let ProductInCart;
        if (sameIdCount > 1) {
          const index = cart2.findIndex((item) => item.id === id);
          ProductInCart = [...cart2.slice(0, index), ...cart2.slice(index + 1)];
        } else {
          ProductInCart = cart2.filter((item) => item.id !== id);
        }
        Swal.fire({
          icon: "success",
          iconColor: "green",
          titleText: "producto eliminado de la lista de compra ",
          background: "#333333",
          color: "#FF9500",
          html: '<span style="color: orange;"></span>',
        });
        localStorage.setItem("cart", JSON.stringify(ProductInCart));
        return { cart: ProductInCart };
      }),
  }),
  {
    name: "shopping_cart",
    getStorage: () => (typeof window !== "undefined" ? localStorage : null),
  }
);
export default useStore;
