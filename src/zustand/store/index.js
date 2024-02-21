'use client'
import create from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import Swal from 'sweetalert2';

const useStore = create(persist(
  (set) => ({
    product: [],
    cart: [],
    filter: 'all',
    getHamburguesas: async () => {
      const API_URL =
        process.env.NODE_ENV === 'development'
          ? process.env.NEXT_PUBLIC_URL_REQUESTS_PRODUCTOS_LOCAL
          : process.env.NEXT_PUBLIC__PROD_URL_REQUESTS_PRODUCTOS_DEPLOY;
      const response = await axios.get(API_URL);
      set({ product: response.data });
    },
    setFilter: (filter) => set({ filter }),
    addProductToCart: (producto) =>
      set((state) => {
        const newProductInCart = [...state.cart, producto];
        Swal.fire({
          icon: 'success',
          iconColor: 'green',
          titleText: 'produc ADD TO CART',
          background: '#333333',
          color: '#FF9500',
          html: '<span style="color: orange;"></span>',
        });
        return { cart: newProductInCart };
      }),

      deleateProductToCart: (id) =>
      set((state) => {

      const cart2 =[...state.cart]

        const ProductInCart = cart2.filter(item => item.id !== id);
        Swal.fire({
          icon: 'success',
          iconColor: 'green',
          titleText: 'produc DELEATE TO CART',
          background: '#333333',
          color: '#FF9500',
          html: '<span style="color: orange;"></span>',
        });
        return { cart: ProductInCart };
      }),
      
      



  }),
  {
    name: 'shopping_cart', // nombre único para el almacenamiento local
    getStorage: () => localStorage, // especifica el almacenamiento local del navegador
  }
));

export default useStore;
