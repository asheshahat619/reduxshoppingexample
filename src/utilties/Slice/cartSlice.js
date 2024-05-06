import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice(
    {
        name:"cartSLice",
        initialState:{
            items:[]
        },
        reducers:{
            addProduct:(state,action)=>{
                 state.items.push(action.payload)
            },
            removeFromCart:(state)=>{
                state.items.pop()
            }
        }
    }
)
export const {addProduct,removeFromCart}=cartSlice.actions
export default cartSlice.reducer