import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : "CartSlice",
    initialState:{
        item: []
    },

    reducers:{

        AddToCart: (state , action)=>{
            state.item.push(action.payload)
            console.log(action.payload)
        }
    }
})



export const { AddToCart } = CartSlice.actions;
export default CartSlice.reducer