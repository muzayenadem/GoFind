import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { mainLink } from "../../commonLink/mainLInk";
const initailState = {
    loading:false,
    properties:[],
    error:''
}

export const fetchAllProperties = createAsyncThunk('properties/fetchAllProperties',(value)=>{
    return axios.get(`${mainLink}/all-properties`+value)
    .then(result =>{
        return result.data
    })
})
const allPrpertySlice = createSlice({
    name:"properties",
    initialState:initailState,
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProperties.pending,(state,action)=>{
            state.loading = true
            state.error ='pending'
        })
        builder.addCase(fetchAllProperties.fulfilled,(state,action)=>{
            state.loading = false
            state.properties = action.payload
            state.error = 'succed'
        })
        builder.addCase(fetchAllProperties.rejected,(state,action)=>{
            state.loading = false
            state.properties = []
            state.error = action.error.message
        })
    }
})

export default allPrpertySlice.reducer