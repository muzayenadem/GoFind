import Select from 'react-select'
// real icons
import { IoHome } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";
import { SiCampaignmonitor } from "react-icons/si";
import { Link } from 'react-router-dom';

//practice
import { CgProfile } from "react-icons/cg";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { PiPhoneCallLight } from "react-icons/pi";
import { PiPasswordLight } from "react-icons/pi";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { BiDetail } from "react-icons/bi";
import { Sidebar, Menu, MenuItem, SubMenu, } from 'react-pro-sidebar';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

////
import { FaFacebook,FaGoogle,FaYoutube,FaX, FaQuora,FaGithub,FaReddit,FaChartArea,FaTiktok,FaInstagram ,FaArrowDown,FaArrowUp,FaLinkedin} from 'react-icons/fa6';
import { MdClear, MdSpaceDashboard } from "react-icons/md";

import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { closeLandlordSidebarToggle } from '../../controller/Buttons/landlordToggle';

function LandlordSidebar() {
    const [collapsed, setCollapsed] = useState(false); // Example of managing collapsed state
    const [toggled, setToggled] = useState(false); // Example of managing toggled state

    const dispatch = useDispatch()
    const state = useSelector(state => state.landlordToggle.open)
    console.log({state})


    const collapseSidebar = () => {
        setCollapsed(!collapsed);
      };
    
      const expandSidebar = () => {
        setCollapsed(false);
      };
    
      const toggleSidebar = () => {
        setToggled(true);
      };
      const close = ()=>{
        dispatch(closeLandlordSidebarToggle())
      }
  console.log({toggled})
  const responsive = () =>{
    setOpen(true)
  }
  return (
    // <Select 
    // className='w-[98%] ml-[1%] md:hidden mb-2'
    // options={butn2}/>
    <div className={` py-1 md:py-0 sticky md:sticky bg-white top-0 left-0  ${!state && 'hidden md:block'}`}>
            <Sidebar className={`h-[100vh] sticky top-2  left-0 md:py-3 `} 
               collapsed={collapsed}
               toggled={toggled}
               breakPoint={''} // Example breakpoint
               rtl={false} // Example RTL setting
               >
                <div onClick={close} className="flex md:hidden flex-col justify-end items-end px-6 py-2">
                  <span className='text-2xl font-bold'><MdClear/></span>
                </div>
                  <div className='flex flex-col justify-end items-end px-6 py-5'>
                    <button>
                        {
                            collapsed ?
                            <span onClick={collapseSidebar} className='text-2xl text-neutral-800'><FaArrowAltCircleRight/></span>:
                            <span onClick={collapseSidebar}  className='text-2xl text-neutral-800'><FaArrowAltCircleLeft/></span>

                        }
                    </button>
                  </div>
    <Menu>
    <MenuItem icon={<MdSpaceDashboard/>} onClick={close} component={<Link to=''/>}> Dashboard </MenuItem>
      <SubMenu icon={<FaArrowDown/> && <FaArrowUp/>} label="Payments">
        <MenuItem icon={<FaGithub/>}> Pie chart </MenuItem>
        <MenuItem icon={<FaLinkedin/>}> Line charts </MenuItem>
      </SubMenu>
      <MenuItem icon={<IoHome/>} onClick={close} component={<Link to='property'/>}>Property </MenuItem>
      <MenuItem icon={<IoIosBed/>}> Listing </MenuItem>
      <MenuItem icon={<FaTiktok/>}> Tiktok </MenuItem>
      <MenuItem icon={<FaReddit/>}> Reddit </MenuItem>
      <MenuItem icon={<FaFacebook/>}> Facebook </MenuItem>
      <SubMenu icon={<FaChartArea/>} label='Fix all'>
      <MenuItem icon={<FaGoogle/>}> Google </MenuItem>
      <MenuItem icon={<FaQuora/>}> Qoura </MenuItem>
      <MenuItem icon={<FaInstagram/>}> Instagram </MenuItem>
      </SubMenu>
    </Menu>
  </Sidebar>
    </div>
  )
}

export default LandlordSidebar
const butn2 = [
    {
        value:"NEW1",
        label:<Link to=''>
        <div className='flex gap-3 px-4 h-8 py-2 '>
        <span className='text-xl'>
          <CgProfile/>
      </span>
      <h2>Profile</h2>
  </div>
        </Link>
    },
    {
        value:"NEW2",
        label:<Link to={'supporting-documents'}>
        <div className='flex gap-3 px-4 h-8 py-2 '>
        <span className='text-xl'>
          <HiOutlineClipboardDocumentList/>
      </span>
      <h2>Supporting documents</h2>
  </div>
        </Link>
    },
    {
        value:"NEW3",
        label:<Link to={'contact-details'}>
          <div className='flex gap-3 px-4 h-8 py-2 '>
          <span className='text-xl'>
            <PiPhoneCallLight/>
        </span>
        <h2>Contact details</h2>
    </div>
        </Link>
    },
    {
        value:"NEW4",
        label:<Link to='change-password'>
            <div className='flex gap-3 px-4 h-8 py-2 '>
        <span className='text-xl'>
          <PiPasswordLight/>
      </span>
      <h2>Change password</h2>
  </div>
        </Link>
    },
    {
        value:"NEW5",
        label:<Link to={'notification'}>
        <div className='flex gap-3 px-4 h-8 py-2 '>
        <span className='text-xl'>
          <IoNotificationsOffOutline/>
      </span>
      <h2>Notification settings</h2>
  </div>
        </Link>
    },
    {
        value:"NEW6",
        label:<Link to={'subscription'}>
        <div className='flex gap-3 px-4 h-8 py-2 '>
        <span className='text-xl'>
          <BiDetail/>
      </span>
      <h2>Subscription</h2>
  </div>
        </Link>
    }
]