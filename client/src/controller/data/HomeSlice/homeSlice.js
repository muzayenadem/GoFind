import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initailState = {
    loading:false,
    homes:[],
    error:''
}

export const fetchHomes = createAsyncThunk('home/fetchHomes',(value)=>{
    return axios.get('http://localhost:3500/all-homes'+value)
    .then(result =>{
        return result.data
    })
})

const homeSlice = createSlice({
    name:"home",
    initialState:initailState,
    extraReducers:(builder)=>{
        builder.addCase(fetchHomes.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(fetchHomes.fulfilled,(state,action)=>{
            state.loading = false
            state.homes = action.payload
            state.error = ''
        })
        builder.addCase(fetchHomes.rejected,(state,action)=>{
            state.loading = false
            state.homes = []
            state.error = action.error.message
        })
    }
})


export default homeSlice.reducer