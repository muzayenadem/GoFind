import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import  axios from "axios"
import { mainLink } from "../../commonLink/mainLInk"


const initialState ={
    loading:false,
    property:{},
    error:''
}

export const singlePropertyReducer = createAsyncThunk('singleProperty/singlePropertyReducer',(id)=>{
    return  axios.get(`${mainLink}/api-property-detail`+id)
    .then((result) => {
        return result.data
    })
})

const singlePropertySlice = createSlice({
    name:'singleProperty',
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase(singlePropertyReducer.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(singlePropertyReducer.fulfilled,(state,action)=>{
            state.loading = false
            state.property = action.payload
        })
        builder.addCase(singlePropertyReducer.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.error.message
        })
    }
})


export default singlePropertySlice.reducer