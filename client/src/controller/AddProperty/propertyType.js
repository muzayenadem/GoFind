import { createSlice } from "@reduxjs/toolkit";

const initailState ={
    category:'',
    type:'',
    quantity:1,
    theSamePlace:true,
    subCategory:'',
    multiple:false,
    name:'',


    permissions:{
        smoking:false,
        student:true,
        pets:true,
        children:true,
        family:true,
        dssIncome:true,
        onlyStudent:true
    },
    location:{
        name:'',
        marker:null
    },

    images:[],

    amenities:{
        kitchen:true,
        washingMachine:false,
        wifi:true,
        petFriendly:false,
        tv:true,
        parking:false,
        balcony:false,
        airCondition:false,
        chimney:false,
        garden:true,
        terrace:false,
        minibar:false,
        swimmingPool:false,
        electricVehicleCharge:false,
        pool:false,
        all:false,
    },
    pricing:{
        price:null
    },
}

const propertyType = createSlice({
    name:'apartment',
    initialState:initailState,
    reducers:{
        setType:(state,action) =>{
            state.type = action.payload
        },
        setQuantity:(state,action) =>{
            state.quantity = action.payload
        },
        notTheSamePlace:(state)=>{
            state.theSamePlace = false
        },
        setCategory:(state,action)=>{
            state.category = action.payload
        },
        setSubCategory:(state,action)=>{
            state.subCategory = action.payload
        },
        setMultiple:(state,action) =>{
            state.multiple = action.payload
        },
        setName:(state, action)=>{
            state.name = action.payload
        },

        //disatchers for locations
        setLocationName:(state,action)=>{
            state.location.name = action.payload
        },
        setLongitudeAndLatitudeOFProperty:(state,action) =>{
            state.location.marker = action.payload
        },


        //dispatchers for permissions
        setSmoking:(state) =>{
            state.permissions.smoking = !state.permissions.smoking
        },
        setPets:(state) =>{
            state.permissions.pets = !state.permissions.pets
        },
        setStudents:(state) =>{
            state.permissions.student = !state.permissions.student
        },
        setOnlyStudent:(state) =>{
            state.permissions.onlyStudent = !state.permissions.onlyStudent
        },
        setFamily:(state) =>{
            state.permissions.family = !state.permissions.family
        },
        setDssIncome:(state) =>{
            state.permissions.dssIncome = !state.permissions.dssIncome
        },
        setChildren:(state) =>{
            state.permissions.children = !state.permissions.children
        },


        // dispatchers for amenities
        setKitchen:(state) =>{
            state.amenities.kitchen = !state.amenities.kitchen
            if(state.amenities.kitchen == false)
                state.amenities.all = false
        },
        setpetFriendly:(state) =>{
            state.amenities.petFriendly = !state.amenities.petFriendly
            if(state.amenities.petFriendly == false)
                state.amenities.all = false
        },
        setWashingMachines:(state) =>{
            state.amenities.washingMachine = !state.amenities.washingMachine
            if(state.amenities.washingMachine == false)
                state.amenities.all = false
        },
        setPool:(state) =>{
            state.amenities.pool = !state.amenities.pool
            if(state.amenities.pool == false)
                state.amenities.all = false
        },
        setWifi:(state) =>{
            state.amenities.wifi = !state.amenities.wifi
            if(state.amenities.wifi == false)
                state.amenities.all = false
        },
         setTv:(state) =>{
            state.amenities.tv = !state.amenities.tv
            if(state.amenities.tv == false)
                state.amenities.all = false
        },
         setParking:(state) =>{
            state.amenities.parking = !state.amenities.parking
            if(state.amenities.parking == false)
                state.amenities.all = false
        },
         setBalcony:(state) =>{
            state.amenities.balcony = !state.amenities.balcony
            if(state.amenities.balcony == false)
                state.amenities.all = false
        },
         setAirCondition:(state) =>{
            state.amenities.airCondition = !state.amenities.airCondition
            if(state.amenities.airCondition == false)
                state.amenities.all = false
        },
         setChimney:(state) =>{
            state.amenities.chimney = !state.amenities.chimney
            if(state.amenities.chimney == false)
                state.amenities.all = false
        },
         setElectricVehicleCharge:(state) =>{
            state.amenities.electricVehicleCharge = !state.amenities.electricVehicleCharge
            if(state.amenities.electricVehicleCharge == false)
                state.amenities.all = false
        },
         setSwimming:(state) =>{
            state.amenities.swimmingPool = !state.amenities.swimmingPool
            if(state.amenities.swimmingPool == false)
                state.amenities.all = false
        },
         setMinibar:(state) =>{
            state.amenities.minibar = !state.amenities.minibar
            if(state.amenities.minibar == false)
                state.amenities.all = false
        },
         setGarden:(state) =>{
            state.amenities.garden = !state.amenities.garden
            if(state.amenities.garden == false)
                state.amenities.all = false
        },
         setTerrace:(state) =>{
            state.amenities.terrace = !state.amenities.terrace
            if(state.amenities.terrace == false)
                state.amenities.all = false
        },
        //to select and des select all amenities
        setAllAmenities:(state)=>{
            state.amenities.kitchen = true
            state.amenities.petFriendly = true
            state.amenities.washingMachine = true
            state.amenities.pool = true
            state.amenities.wifi = true
            state.amenities.tv = true
            state.amenities.parking = true
            state.amenities.balcony = true
            state.amenities.airCondition = true
            state.amenities.chimney = true
            state.amenities.electricVehicleCharge = true
            state.amenities.swimmingPool = true
            state.amenities.minibar = true
            state.amenities.garden = true
            state.amenities.terrace = true
            state.amenities.all = true
        },
        setNotAllAmenities:(state)=>{
            state.amenities.kitchen = false
            state.amenities.petFriendly =false
            state.amenities.washingMachine =false
            state.amenities.pool = false
            state.amenities.wifi = false
            state.amenities.tv = false
            state.amenities.parking = false
            state.amenities.balcony = false
            state.amenities.airCondition = false
            state.amenities.chimney = false
            state.amenities.electricVehicleCharge = false
            state.amenities.swimmingPool = false
            state.amenities.minibar = false
            state.amenities.garden = false
            state.amenities.terrace = false
            state.amenities.all = false
        },

        setImages:(state,action)=>{
           for (let  i = 0; i <= action.payload.length-1; i++ ){
            state.images.push(action.payload[i])
           }
        },
        removeImage:(state,action)=>{
            state.images.splice(action.payload,1)
        }
    },
})

export const {
    setType,setQuantity,notTheSamePlace,
    setCategory,setSubCategory,setMultiple,
    setName,
    // permission function
    setSmoking,setChildren,setDssIncome,
    setFamily,setStudents,setPets,setOnlyStudent,
    //locations
    setLocationName,setLongitudeAndLatitudeOFProperty,
    // amenities function
    setpetFriendly,setKitchen,setWashingMachines,
    setPool,setWifi,setTv,setParking,setBalcony,
    setAirCondition,setChimney,setElectricVehicleCharge,
    setSwimming,setMinibar,setGarden,setTerrace,
    //to select and dis select all amenities
    setAllAmenities,setNotAllAmenities,
    // to delete and store images
    setImages,removeImage
} = propertyType.actions


export default propertyType.reducer