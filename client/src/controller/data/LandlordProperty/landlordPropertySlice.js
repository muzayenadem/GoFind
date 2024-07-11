import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { mainLink } from "../../commonLink/mainLInk";

const initialState = {
    loading:false,
    property:[],
    error:''
}

export const landlordPropertyReducer = createAsyncThunk('landlordProperty/landlordPropertyReducer',()=>{
    return axios.get(`${mainLink}/api-list-landlord-property`)
    .then( res =>{
        return res.data
    })  
})

const landlordPropertySlice = createSlice({
    name:"landlordProperty",
    initialState:initialState,
    extraReducers:(builder) =>{
        builder.addCase(landlordPropertyReducer.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(landlordPropertyReducer.fulfilled,(state,action)=>{
            state.loading = false
            state.property = action.payload
        })
        builder.addCase(landlordPropertyReducer.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})


export default landlordPropertySlice.reducer