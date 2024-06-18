import {createSlice} from '@reduxjs/toolkit'

const initailState ={
    homePage:0,
    apartmentPage:0,
    hotelsPage:0,
    othersPage:0,
}

const propertType = createSlice({
    name:'nextPrev',
    initialState:initailState,
    reducers:{
        homeNextpage :(state,action) =>{
            state.homePage += 1
        },
        homePreviousPage:(state,action)=>{
            if (state.homePage !== 0)
                state.homePage -= 1
        },
        apartmentNextpage :(state,action) =>{
            state.apartmentPage += 1
        },
        apartmentPreviousPage:(state,action)=>{
            if (state.apartmentPage !== 0)
                state.apartmentPage -= 1
        },
        hotelsNextpage :(state,action) =>{
            state.hotelsPage += 1
        },
        hotelsPreviousPage:(state,action)=>{
            if (state.hotelsPage !== 0)
                state.hotelsPage -= 1
        },
        othersNextpage :(state,action) =>{
            state.othersPage += 1
        },
        othersPreviousPage:(state,action)=>{
            if (state.othersPage !== 0)
                state.othersPage -= 1
        },
    }
})

export const {
    homeNextpage,
    homePreviousPage,
    apartmentNextpage,
    apartmentPreviousPage,
    hotelsNextpage,
    hotelsPreviousPage,
    othersNextpage,
    othersPreviousPage,
} = propertType.actions

export default propertType.reducer