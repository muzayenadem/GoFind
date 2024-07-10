import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../data/HomeSlice/homeSlice.js";
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
const store = configureStore({
    reducer:{
        homesReducer:homeSlice,
        searchedHomeReducer:SearchedHome,

        // buttons
        renterProfileButtons,
        landlordProfileButtons,
        landlordToggle,
        locationForLandlord,


        // login and sign up
        renterNum:Renters,
        landlord:landlord,

        // tokens reducer
        renterToken,
        landlordToken,

        //addition property states
        propertyType,

        //for next and previous page
        NextPrev,

        // profiles data
        renterProfile:renterProfileSlice,
        landlordProfile:landlordProfileSlice,
    }
})
export default store