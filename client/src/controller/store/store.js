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
const store = configureStore({
    reducer:{
        homesReducer:homeSlice,
        searchedHomeReducer:SearchedHome,

        // buttons
        renterProfileButtons,
        landlordProfileButtons,
        landlordToggle,

        renterNum:Renters,
        landlord:landlord,


        //addition property states
        propertyType,

        //for next and previous page
        NextPrev
    }
})
export default store