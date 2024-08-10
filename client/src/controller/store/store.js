import { configureStore } from "@reduxjs/toolkit";
import Renters from "../Real/Renters.js";
import landlord from "../Real/landlord.js";
import SearchedHome from "../data/SearchedHome/SearchedHome.js";
import landlordProfileButtons from "../Buttons/landlordProfileButtons.js";
//buttons
import renterProfileButtons from "../Buttons/renterProfileButtons.js";
import landlordToggle from "../Buttons/landlordToggle.js";
import propertyType from "../AddProperty/propertyType.js";
import NextPrev from "../AddProperty/NextPrev.js";
import locationForLandlord from "../Buttons/locationForLandlord.js";
import renterToken from "../tokens/renterToken.js";
import renterProfileSlice from "../data/RenterSlice/renterProfileSlice.js";
import landlordProfileSlice from "../data/LandLordSlice/landlordProfileSlice.js";
import landlordToken from "../tokens/landlordToken.js";
import landlordPropertySlice from "../data/LandlordProperty/landlordPropertySlice.js";
import allPropertySlice from "../data/AllPropertySlice/allPropertySlice.js";
import singlePropertySlice from "../data/singleProperty/singlePropertySlice.js";
import viewsSlice from "../specialFunctions/viewsSlice.js";
const store = configureStore({
    reducer:{
        // properties
        allProperties:allPropertySlice,
        searchedHomeReducer:SearchedHome,

        // buttons
        renterProfileButtons,
        landlordProfileButtons,
        landlordToggle,
        locationForLandlord,
        viewsReducer:viewsSlice,
        //special functions


        // login and sign up
        renterNum:Renters,
        landlord:landlord,

        // tokens reducer
        renterToken,
        landlordToken,

        //addition property states
        propertyType,

        //property datas
        landlordProperty:landlordPropertySlice,
        //single property detail
        singleProperty:singlePropertySlice,

        //for next and previous page
        NextPrev,

        // profiles data
        renterProfile:renterProfileSlice,
        landlordProfile:landlordProfileSlice,
    }
})
export default store