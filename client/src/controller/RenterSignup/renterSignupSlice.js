import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { mainLink } from "../commonLink/mainLInk";
const initialState = {
    loading:false,
    succed:'',
    error:''
}

export const renterSignupReducer = createAsyncThunk('renterSignup/renterSignupReducer', (value)=>{
     return axios.post(`${mainLink}/api-renter-signup`,value)
     .then(res =>{
        return res.data
     })
     .catch(err =>{
        return err.message
     })
})

const renterSignupSlice = createSlice({
    name:'renterSignup',
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase(renterSignupReducer.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(renterSignupReducer.fulfilled,(state,action)=>{
            state.loading = false
            state.succed = action.payload
        })
        builder.addCase(renterSignupReducer.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default renterSignupSlice.reducer

