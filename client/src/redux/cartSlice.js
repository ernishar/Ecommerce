
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
    cartTotalPrice: 0,
    cartTotalProduct: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity, selectedVariantPrice } = action.payload;
      const existingItemIndex = state.carts.findIndex(
        (item) => item.product.id === product.id && item.selectedVariantPrice === selectedVariantPrice
      );

      if (existingItemIndex !== -1) {
        state.carts[existingItemIndex].quantity += quantity;
      } else {
        state.carts.push({
          product,
          quantity,
          selectedVariantPrice,
        });
      }

      // Update total price and total product count
      state.cartTotalPrice += quantity * selectedVariantPrice;
      state.cartTotalProduct += quantity;
    },
    decrementItem: (state, action) => {
      const { productId, selectedVariantPrice } = action.payload;
      const existingItemIndex = state.carts.findIndex(
        (item) => item.product.id === productId && item.selectedVariantPrice === selectedVariantPrice
      );

      if (existingItemIndex !== -1) {
        if (state.carts[existingItemIndex].quantity <= 1) {
          state.cartTotalPrice -= selectedVariantPrice;
          state.cartTotalProduct -= 1;
          state.carts.splice(existingItemIndex, 1);
        } else {
          state.carts[existingItemIndex].quantity -= 1;
          state.cartTotalPrice -= selectedVariantPrice;
          state.cartTotalProduct -= 1;
        }
      }
    },
    incrementItem: (state, action) => {
      const { product, quantity, selectedVariantPrice } = action.payload;
      const existingItemIndex = state.carts.findIndex(
        (item) => item.product.id === product.id && item.selectedVariantPrice === selectedVariantPrice
      );

      if (existingItemIndex !== -1) {
        state.carts[existingItemIndex].quantity += quantity;
        state.cartTotalPrice += quantity * selectedVariantPrice;
        state.cartTotalProduct += quantity;
      } else {
        state.carts.push({
          product,
          quantity,
          selectedVariantPrice,
        });
        state.cartTotalPrice += quantity * selectedVariantPrice;
        state.cartTotalProduct += quantity;
      }
    },
    removeItem: (state, action) => {
      const { productId, selectedVariantPrice } = action.payload;
      const existingItemIndex = state.carts.findIndex(
        (item) =>
          item.product.id === productId && item.selectedVariantPrice === selectedVariantPrice
      );
    
      if (existingItemIndex !== -1) {
        const removedQuantity = state.carts[existingItemIndex].quantity;
        state.cartTotalPrice -= removedQuantity * selectedVariantPrice;
        state.cartTotalProduct -= removedQuantity;
        state.carts.splice(existingItemIndex, 1);
      }
    },
    
    // Ensure that getTotalPrice updates the state correctly
    getTotalPrice: (state) => {
      const totalPrice = state.carts.reduce((total, item) => {
        return total + item.selectedVariantPrice * item.quantity;
      }, 0);
    
      const totalProduct = state.carts.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    
      state.cartTotalPrice = totalPrice;
      state.cartTotalProduct = totalProduct;
    },
    
    
  },
});
export const {
  addToCart,
  removeItem,
  getTotalPrice,
  decrementItem,
  incrementItem,
  showQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
