import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        cartquantity: 0,
        total: 0
    },

    reducers: {
        addProduct: (state, action) => {
            state.cartquantity += 1;
            state.products.push(action.payload); //payload is updated products[]
            state.total += action.payload.price * action.payload.productquantity;

            // state.products.push(action.payload.product);
            // state.total += action.payload.price;
        },
    },
});

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;