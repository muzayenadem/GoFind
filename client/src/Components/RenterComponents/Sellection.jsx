import Select from 'react-select'
//icons
import { CgProfile } from "react-icons/cg";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { PiPhoneCallLight } from "react-icons/pi";
import { PiPasswordLight } from "react-icons/pi";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { BiDetail } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Sellection() {
  return (
    <Select 
    className='w-[98%] ml-[1%] md:hidden mb-2'
    options={butn2}/>
  )
}

export default Sellection
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