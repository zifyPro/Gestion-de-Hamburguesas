"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
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
        let newProductInCart = [...state.cart];
        const existingProductIndex = newProductInCart.findIndex(
          (item) => item.id === producto.id
        );

        if (existingProductIndex >= 0) {
          // Si el producto ya está en el carrito, incrementa su quantity en 1
          newProductInCart[existingProductIndex].quantity += 1;
        } else {
          // Si el producto no está en el carrito, lo agrega con quantity igual a 1
          newProductInCart.push({ ...producto, quantity: 1 });
        }

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

        const ProductInCart = cart2.filter((item) => item.id !== id);
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
