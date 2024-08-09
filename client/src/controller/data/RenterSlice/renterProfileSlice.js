import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { mainLink } from "../../commonLink/mainLInk";


const initialState = {
    loading:false,
    data:{},
    error:''
}

export const renterProfileReducer = createAsyncThunk('renterProfile/renterProfileReducer',()=>{
    return axios.get(`${mainLink}/api-renter-profile`)
    .then(res =>{
        return res.data
    })
})


const renterProfileSlice = createSlice({
    name:"renterProfile",
    initialState:initialState,
    extraReducers:(builder) =>{
        builder.addCase(renterProfileReducer.pending,(state,action)=>{
            state.loading = true
            state.error = 'pending'
        })
        builder.addCase(renterProfileReducer.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
            state.error = 'succed'
        })
        builder.addCase(renterProfileReducer.rejected,(state,action)=>{
            state.loading = false
            state.data={}
            state.error = action.error.message
        })
    }
})

export default renterProfileSlice.reducer