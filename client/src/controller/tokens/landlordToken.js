import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { mainLink } from '../commonLink/mainLInk'

const initialState ={
    loading:false,
    token:false,
    error:''    
}

export const landlordTokenReducer = createAsyncThunk('landlordToken/landlordTokenReducer',()=>{
    return axios.get(`${mainLink}/islandlordloggined`)
    .then((res) =>{
        return res.data
    })
    .catch((err) =>{
        return err.message

    })
})
const landlordTokenSlice = createSlice({
    name:'landlordToken',
    initialState:initialState,
    extraReducers:(builder) =>{
        builder.addCase(landlordTokenReducer.pending,(state,action)=>{
            state.loading = true
            state.error = 'pending'
        })
        builder.addCase(landlordTokenReducer.fulfilled,(state,action)=>{
            state.loading = false
            state.error = 'succed'
            state.token = action.payload
        })
        builder.addCase(landlordTokenReducer.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default landlordTokenSlice.reducer