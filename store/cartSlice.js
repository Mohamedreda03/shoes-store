import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (product) => product.id === action.payload.id
      );

      if (item) {
        item.quantity++;
        item.totalProductQuantityPrice = item.attributes.price * item.quantity;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
          totalProductQuantityPrice: action.payload.attributes.price,
        });
      }
    },

    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((product) => {
        if (product.id === action.payload.id) {
          if (action.payload.key === "quantity") {
            product.totalProductQuantityPrice =
              product.attributes.price * action.payload.value;
          }

          return {
            ...product,
            [action.payload.key]: action.payload.value,
          };
        }
        return product;
      });
    },

    deleteCartProduct: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, updateCart, deleteCartProduct } = cartSlice.actions;

export default cartSlice.reducer;
