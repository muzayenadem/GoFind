import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { mainLink } from "../../commonLink/mainLInk";


const initialState = {
    loading:false,
    data:{},
    error:''
}

export const landlordProfileReducer = createAsyncThunk('landlordProfile/landlordProfileReducer',()=>{
    return axios.get(`${mainLink}/api-landlord-profile`)
    .then(res =>{
        return res.data
    })
})


const landlordProfileSlice = createSlice({
    name:"landlordProfile",
    initialState:initialState,
    extraReducers:(builder) =>{
        builder.addCase(landlordProfileReducer.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(landlordProfileReducer.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
            state.error = ''
        })
        builder.addCase(landlordProfileReducer.rejected,(state,action)=>{
            state.loading = false
            state.data={}
            state.error = action.error.message
        })
    }
})

export default landlordProfileSlice.reducer