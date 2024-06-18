import React from 'react'
import { CgProfile } from "react-icons/cg";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { PiPhoneCallLight } from "react-icons/pi";
import { PiPasswordLight } from "react-icons/pi";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { BiDetail } from "react-icons/bi";
import { Link } from 'react-router-dom';


function RenterButtons() {
  return (
    <div className="hidden   md:flex flex-col  w-full md:w-[25%] py-3  bg-white shadow-md shadow-slate-700 h-72">
    {
        butns.map(({title,link,icon},i)=>{
            return(
                <Link to={link} key={i}>
                    <div className='flex gap-3 px-6 h-12 py-2 hover:bg-slate-200' key={i}>
                    <span className='text-xl'>{icon}</span>
                    <h2>{title}</h2>
                </div>
                </Link>
            )
        })
    }
</div>
  )
}

export default RenterButtons
const butns = [
    {
        title:'Profile',
        link:'',
        icon:<CgProfile/>
    },
    {
        title:'Supporting documents',
        link:'supporting-documents',
        icon:<HiOutlineClipboardDocumentList/>
    },
    {
        title:'Contact details',
        link:'contact-details',
        icon:<PiPhoneCallLight/>
    },
    {
        title:'Change password',
        link:'change-password',
        icon:<PiPasswordLight/>
    },
    {
        title:'Notification settings',
        link:'notification',
        icon:<IoNotificationsOffOutline/>
    },
    {
        title:'Subscription',
        link:'subscription',
        icon:<BiDetail/>
    },
]
