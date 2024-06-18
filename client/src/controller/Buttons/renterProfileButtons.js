import { createSlice } from "@reduxjs/toolkit";



const initailState = {
    open:false
}

const renterProfileButton = createSlice({
    name:'buttons',
    initialState:initailState,
    reducers:{
        openForRenter:(state,action) =>{
            state.open = true
        },
        closeForRenter:(state,action) =>{
            state.open = false
        }
    }
})
export const {openForRenter,closeForRenter} = renterProfileButton.actions

export default renterProfileButton.reducer