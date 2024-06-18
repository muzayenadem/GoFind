import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    num:100
}

const renternumSlice = createSlice({
    name:'renters',
    initialState,
    reducers:{
        addition:(state,action)=>{
            state.num--
        },
        substr:(state,action)=>{
            state.num += action.payload
        }
    }
}) 

export default renternumSlice.reducer
export const {addition,substr} = renternumSlice.actions
export const renterAction = renternumSlice.actions