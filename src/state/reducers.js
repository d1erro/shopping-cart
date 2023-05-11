import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartProducts: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newProduct = action.payload;
            const existingProduct = state.cartProducts.find((product) => product.id === newProduct.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cartProducts.push({ ...newProduct, quantity: 1 });
            }
        },
        removeOneFromCart: (state, action) => {
            const productId = action.payload;
            const product = state.cartProducts.find((product) => product.id === productId);

            if (product) {
                if (product.quantity === 1) {
                    state.cartProducts = state.cartProducts.filter((product) => product.id !== productId);
                } else {
                    product.quantity -= 1;
                }
            }
        },
        removeAllFromCart: (state, action) => {
            const removedProduct = action.payload;
            state.cartProducts = state.cartProducts.filter((product) => product.id !== removedProduct.id);
        },
    },
});

export const { addToCart, removeOneFromCart, removeAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;