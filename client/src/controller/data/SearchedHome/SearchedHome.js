import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { mainLink } from '../../commonLink/mainLInk'

const initailState = {
    loading:false,
    searched:[],
    error:''
}

export const fetchSearchedHome = createAsyncThunk('searchedHome/fetchSearchedHome',(value)=>{
    return axios.get(`${mainLink}/searched-home`+value)
    .then(res =>{
        return res.data
    })
})

const searchedDHomeSlice = createSlice({
    name:'searchedHome',
    initialState:initailState,
    extraReducers:(builder)=>{
        builder.addCase(fetchSearchedHome.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(fetchSearchedHome.fulfilled,(state,action)=>{
            state.loading = false
            state.searched = action.payload
            state.error = ''
        })
        builder.addCase(fetchSearchedHome.rejected,(state,action)=>{
            state.loading = false
            state.searched = []
            state.error = action.error.message
        })
    }
})


// const searchedDataSlice = createSlice({
//     name:'searchedHome',
//     initialState:initailState,
//     reducers:{
//         search:(state,action)=>{
//             const value = action.payload
//             axios.get('http://localhost:3500/searched-home'+value)
//             .then(res =>{
//                state.searched = res.data
//                return state
//             })
//         }
//     }
// })

export default searchedDHomeSlice.reducer
export const {search} = searchedDHomeSlice.actions