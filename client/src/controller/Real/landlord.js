import { createSlice } from "@reduxjs/toolkit";
import { addition,substr } from "./Renters";
import {renterAction} from './Renters'
const initailState ={
    num:122
}

const landlordSlice = createSlice({
    name:'landlord',
    initialState:initailState,
    reducers:{
        change:(state,action)=>{
            state.num--
        },
        restock:(state,action)=>{
            state.num +=action.payload
        },
        ifyouwant:(state)=>{
            state.num = state.num
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(addition,(state,action)=>{
            state.num++
        })
        builder.addCase(substr, (state,action)=>{
            state.num -= action.payload
        })
    }
    // extraReducers:(builder)=>{
    //     builder.addCase(addition, (state,action)=>{
    //         state.num--
    //     })
    //     builder.addCase(substr,(state,action)=>{
    //        // state.quantity += 5
    //         state.num += action.payload
    //     })
    // }
    // extraReducers:{
    //     ['renter/addition']:(state,action)=>{
    //         state.num++
    //     }
    // }
})


export default landlordSlice.reducer
export const {change,restock,ifyouwant} = landlordSlice.actions