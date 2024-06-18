import { createSlice } from "@reduxjs/toolkit";



const initailState = {
    open:false
}

const landlordProfileButton = createSlice({
    name:'buttons',
    initialState:initailState,
    reducers:{
        openForLandlord:(state,action) =>{
            state.open = true
        },
        closeForLandlord:(state,action) =>{
            state.open = false
        }
    }
})
export const {openForLandlord,closeForLandlord} = landlordProfileButton.actions

export default landlordProfileButton.reducer