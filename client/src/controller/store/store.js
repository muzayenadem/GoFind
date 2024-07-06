import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../data/HomeSlice/homeSlice.js";
import Renters from "../Real/Renters.js";
import landlord from "../Real/landlord.js";
import SearchedHome from "../data/SearchedHome/SearchedHome.js";
import landlordProfileButtons from "../Buttons/landlordProfileButtons.js";
import renterSignupSlice from "../RenterSignup/renterSignupSlice.js";
//buttons
import renterProfileButtons from "../Buttons/renterProfileButtons.js";
import landlordToggle from "../Buttons/landlordToggle.js";
import propertyType from "../AddProperty/propertyType.js";
import NextPrev from "../AddProperty/NextPrev.js";
import locationForLandlord from "../Buttons/locationForLandlord.js";
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
        renterSignup:renterSignupSlice,
        renterNum:Renters,
        landlord:landlord,


        //addition property states
        propertyType,

        //for next and previous page
        NextPrev
    }
})
export default store