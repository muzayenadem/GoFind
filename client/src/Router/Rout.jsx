import React from 'react'
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
import { useSelector } from 'react-redux'
import LandLordLogin from '../Components/Login/LandLordLogin'
import LandlordSignup from '../Components/Signup/LanLordSignup'
import DetailOfProperty from '../Components/detailOfProperty/DetailOfProperty'
import isLandlordLoginned from '../Components/componentsData/isLandlordLoginned'
import LandlordNotSignIned from '../Components/ErrorPages/LandlordNotSignIned'
function Rout() {
  const params = useParams()
  const propertyType = useSelector(state => state.propertyType.subCategory)
  const landlordToken = isLandlordLoginned()
  console.log({landLordTokenFromRouter:landlordToken})
  return (
    <Router>
        <Routes>
            <Route path='map' element={<Map4/>}/>
            <Route path='/' element={<MainOfApp/>}>
              <Route path='' element={<Home/>}/>
              <Route path='detail-of-property/:propertyId' element={<DetailOfProperty/>}/>
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