import React, { useEffect, useState } from 'react'
import MainOfApp from '../Container/MainOfApp/MainOfApp'
import {BrowserRouter as  Router,Route,Link, Routes, useParams } from 'react-router-dom'
import RenterLogin from '../Components/Login/RenterLogin'
import RenterSignup from '../Components/Signup/RenterSignup'
import Home from '../Components/Home/Home'
import RenterDashbord from '../Container/RenterDashbord/RenterDashbord'
import RenterProfileEdiit from '../Components/RenterComponents/RenterProfileEdiit'
import ChangePassword from '../Components/RenterComponents/ChangePassword'
import ContactDetail from '../Components/RenterComponents/ContactDetail'
import SupportiveDocuments from '../Components/RenterComponents/SupportiveDocuments'
import Subscription from '../Components/RenterComponents/Subscription'
import Notification from '../Components/RenterComponents/Notification'
import LandLordDashboard from '../Container/LandlordDashboard/LandLordDashboard'
import LandLordMainDashboard from '../Components/LandLordComponents/DashboardComponents/LandLordMainDashboard'
import MainProperty from '../Components/LandLordComponents/Proporties/MainProporty/MainProperty'
import TypesOfProperty from '../Components/LandLordComponents/Proporties/MainProporty/TypesOfProperty'
import Apartment from '../Components/LandLordComponents/Proporties/AddProperty/Apartment/Apartment'
import Others from '../Components/LandLordComponents/Proporties/AddProperty/Other/Others'
import Hotels from '../Components/LandLordComponents/Proporties/AddProperty/Hotels/Hotels'
import Homes from '../Components/LandLordComponents/Proporties/AddProperty/Homes/Homes'
import Map3 from '../Components/LandLordComponents/Proporties/AddProperty/Common/Maps/Map3'
import Map4 from '../Components/LandLordComponents/Proporties/AddProperty/Common/Maps/Map'
import LocationOfProperty from '../Components/LandLordComponents/Proporties/AddProperty/Common/CreateProperty/LocationOfProperty'
import { useDispatch, useSelector } from 'react-redux'
import LandLordLogin from '../Components/Login/LandLordLogin'
import LandlordSignup from '../Components/Signup/LanLordSignup'
import isLandlordLoginned from '../Components/componentsData/isLandlordLoginned'
import LandlordNotSignIned from '../Components/ErrorPages/LandlordNotSignIned'
import SingleProperty from '../Components/SingleProperty/SingleProperty'
function Rout() {
  const [isloading,setIsLoading] = useState(false)
  const isloading2 = useSelector(state => state.allProperties.loading)
  useEffect(()=>{
    setIsLoading(isloading2)
  },[])
  const propertyType = useSelector(state => state.propertyType.subCategory)
   const landlordToken = isLandlordLoginned()
   console.log({landLordTokenFromRouter:landlordToken,isloading})
  if (isloading2 == 'u'){
    return (
    <div className="flex items-center justify-center px-32 py-60  md:p-32 md:py-60 min-h-[65vh] space-x-2">

      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-800"></div>
      <div className="w-3.5 h-3.5 rounded-full animate-pulse dark:bg-violet-700"></div>
      <div className="w-3 h-3 rounded-full animate-pulse dark:bg-violet-600"></div>
      <div className="w-2 h-2 rounded-full animate-pulse dark:bg-violet-500"></div>
      <div className="w-1.5 h-1.5 rounded-full animate-pulse dark:bg-violet-400"></div>
    </div>
    )
  } else
  return (
    <Router>
        <Routes>
            <Route path='map' element={<Map4/>}/>
            <Route path='/' element={<MainOfApp/>}>
              <Route path='' element={<Home/>}/>
              <Route path='detail-of-property/:propertyId' element={<SingleProperty/>}/>
              <Route path='renter-signup' element={<RenterSignup/>}/>
              <Route path='renter-login' element={<RenterLogin/>}/>
              <Route path='landlord-login' element={<LandLordLogin/>}/>
              <Route path='landlord-signup' element={<LandlordSignup/>}/>
              <Route path='renter-dashboard' element={<RenterDashbord/>}>
                    <Route path='' element={<RenterProfileEdiit/>}/>
                    <Route path='change-password' element={<ChangePassword/>}/>
                    <Route path='contact-details' element={<ContactDetail/>}/>
                    <Route path='supporting-documents' element={<SupportiveDocuments/>}/>
                    <Route path='subscription' element={<Subscription/>}/>
                    <Route path='notification' element={<Notification/>}/>
              </Route>
            </Route>
                <Route path='landloard-dashboard' element={landlordToken == true ? <LandLordDashboard/> : <LandlordNotSignIned/>}>
                <Route path='' element={<LandLordMainDashboard/>}/>
                <Route path='property' element={<MainProperty/>}>
                </Route>
                <Route path='property/types-of-property' element={<TypesOfProperty/>}/>
                <Route path='property/types-of-property/apartment' element={<Apartment/>}/>
                <Route path='property/types-of-property/homes' element={<Homes/>}/>
                <Route path='property/types-of-property/hotels' element={<Hotels/>}/>
                <Route path='property/types-of-property/alternative' element={<Others/>}/>
                <Route path={`property/types-of-property/${propertyType}/property-location`} element={<Map4/>}/>
              </Route>
        </Routes>
    </Router>
  )
}

export default Rout