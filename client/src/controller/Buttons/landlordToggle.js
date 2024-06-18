import { createSlice } from "@reduxjs/toolkit";
const initailState = {
    open:false
}

const landlordToggle = createSlice({
    name:'landlordToggle',
    initialState:initailState,
    reducers:{
        openLandlordSidebarToggle : (state) =>{
            state.open = true
        },
        closeLandlordSidebarToggle : (state) =>{
            state.open = false
        }
    }
})

export const {openLandlordSidebarToggle,closeLandlordSidebarToggle} = landlordToggle.actions
export default landlordToggle.reducer