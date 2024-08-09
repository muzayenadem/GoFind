import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { mainLink } from '../commonLink/mainLInk'

const initialState ={
    loading:false,
    token:false,
    error:''    
}

export const renterTokenReducer = createAsyncThunk('renterToken/renterTokenReducer',()=>{
    return axios.get(`${mainLink}/isrenterloggined`)
    .then((res) =>{
        return res.data
    })
    .catch((err) =>{
        return err.message

    })
})
const renterTokenSlice = createSlice({
    name:'renterToken',
    initialState:initialState,
    extraReducers:(builder) =>{
        builder.addCase(renterTokenReducer.pending,(state,action)=>{
            state.loading = true
            state.error = 'pending'
        })
        builder.addCase(renterTokenReducer.fulfilled,(state,action)=>{
            state.loading = false
            state.error = 'succed'
            state.token = action.payload
        })
        builder.addCase(renterTokenReducer.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default renterTokenSlice.reducer