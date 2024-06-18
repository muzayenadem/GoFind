import React from 'react'

import Sellection from '../../Components/RenterComponents/Sellection';
import { Outlet } from 'react-router-dom';
import LandlordButtons from '../../Components/LandLordComponents/LandLordButtons';
import LandlordSidebar from '../../Components/LandLordComponents/LandlordSidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Proporties from '../../Components/LandLordComponents/Proporties/ProportIes';
import LandLordMainDashboard from '../../Components/LandLordComponents/DashboardComponents/LandLordMainDashboard';
import ListingMain from '../../Components/LandLordComponents/Listing/ListingMain';
import MainProperty from '../../Components/LandLordComponents/Proporties/MainProporty/MainProperty';

function LandLordDashboard() {
    return (
        <div className=' bg-neutral-100 m-0 '>
            <Navbar/>
            <div className="flex justify-start gap-5" >
                <LandlordSidebar/>
                {/* <Outlet/> */}
                {/* <MainProperty/> */}
                {/* <LandLordMainDashboard/> */}
                {/* <ListingMain/> */}

                <Outlet/>
            </div>
        </div>
      )
}

export default LandLordDashboard