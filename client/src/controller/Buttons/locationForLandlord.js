import { createSlice } from "@reduxjs/toolkit";

const initailState = {
    open : false
}

const landlordLocationReducer = createSlice({
    name:'landlordLocation',
    initialState:initailState,
    reducers:{
        setLandlordLocationOpen:(state)=>{
            state.open = true
        },
        setLandlordLocationClose:(state)=>{
            state.open = false
        }
    }
})

export const  {setLandlordLocationClose,setLandlordLocationOpen} = landlordLocationReducer.actions

export default landlordLocationReducer.reducer