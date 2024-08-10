import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { mainLink } from "../commonLink/mainLInk";
const initailState = {
    loading:false,
    views:'',
    error:''
}

export const fetchViews = createAsyncThunk('views/fetchViews',(value)=>{
    return axios.get(`${mainLink}/api-property-views`+value)
    .then(result =>{
        return result.data.views
    })
})
const viewsSlice = createSlice({
    name:"views",
    initialState:initailState,
    extraReducers:(builder)=>{
        builder.addCase(fetchViews.pending,(state,action)=>{
            state.loading = true
            state.error ='pending'
        })
        builder.addCase(fetchViews.fulfilled,(state,action)=>{
            state.loading = false
            state.views = action.payload
            state.error = 'succed'
        })
        builder.addCase(fetchViews.rejected,(state,action)=>{
            state.loading = false
            state.views = ''
            state.error = action.error.message
        })
    }
})

export default viewsSlice.reducer