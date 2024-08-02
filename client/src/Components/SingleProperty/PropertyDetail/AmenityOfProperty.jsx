import React from 'react'
import { PiBedLight } from 'react-icons/pi'
import { TbBrandTerraform, TbToolsKitchen } from "react-icons/tb";
import { LiaDogSolid } from "react-icons/lia";
import { GiPoolTableCorner, GiWashingMachine } from "react-icons/gi";
import { TbBrandSugarizer } from "react-icons/tb";
import { MdBalcony, MdOutlineDirectionsCarFilled } from "react-icons/md";
import { LuParkingSquare } from "react-icons/lu";
import { MdOutlinePool } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { FaHouseChimney, FaTv, FaWifi } from "react-icons/fa6";
import { HiMiniBarsArrowUp } from 'react-icons/hi2';
function AmenityOfProperty({amenities}) {
  return (
    <div className=' container mx-auto  px-2 border-b-[1px] border-b-neutral-200 py-6'>
        <div className="flex flex-col gap-6 md:flex-row justify-start py-5">
        <div className="md:w-[20%]">
            <h3 className='font-serif'>Amenities</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 px-6 gap-6 md:w-[65%]">
            {amenities.kitchen == true && (
                <div className="flex gap-5">
                <span className=' text-xl'><TbToolsKitchen/></span>
                <p>Kitchen</p> 
              </div>
            )}
             {amenities.washingMachine == true && (
                <div className="flex gap-5">
                <span className=' text-xl'><GiWashingMachine/></span>
                <p>Washing Machine</p> 
              </div>
            )}
             {amenities.petFriendly == true && (
                <div className="flex gap-5">
                <span className=' text-xl'><LiaDogSolid/></span>
                <p>Pet-friendly</p> 
              </div>
            )}
             {amenities.parking == true && (
                <div className="flex gap-5">
                <span className=' text-xl'><LuParkingSquare/></span>
                <p>Parking</p> 
              </div>
            )}
             {amenities.garden == true && (
                <div className="flex gap-5">
                <span className=' text-xl'><TbBrandSugarizer/></span>
                <p>Garden</p> 
              </div>
            )}
             {amenities.electricVehicleCharge == true && (
                <div className="flex gap-5">
                <span className=' text-xl'><MdOutlineDirectionsCarFilled/></span>
                <p>Vehicle charger</p> 
              </div>
            )}
             {amenities.swimmingPool == true && (
                <div className="flex gap-5">
                <span className=' text-xl'><MdOutlinePool/></span>
                <p>Swimming Pool</p> 
              </div>
            )}
            {amenities.airCondition == true && (
                <div className="flex gap-5">
                <span className=' text-xl'><TbAirConditioning/></span>
                <p>Air Condition</p> 
              </div>
            )}
            {amenities.wifi == true && (
                <div className="flex gap-5">
                <span className=' text-xl'><FaWifi/></span>
                <p>WiFi</p> 
              </div>
            )}
            {amenities.tv == true && (
                <div className="flex gap-5">
                <span className=' text-xl'><FaTv/></span>
                <p>Tv</p> 
              </div>
            )}
            {amenities.pool == true && (
                <div className="flex gap-5">
                <span className=' text-xl'><GiPoolTableCorner/></span>
                <p>Pool</p> 
              </div>
            )}
        </div>
        </div>
        {
            amenities.balcony == true | amenities.terrace == true | amenities.chimney == true | amenities.minibar == true ? (
                <div className="flex flex-col gap-6 md:flex-row justify-start py-6 border-t-[1px] border-t-neutral-300">
             <div className="md:w-[20%]">
                 <h3 className='font-serif'>Special Amenities</h3>
            </div>
              <div className="grid grid-cols-2 md:grid-cols-3 px-6 gap-6 md:w-[65%]">
              {amenities.balcony == true && (
                <div className="flex gap-5">
                <span className=' text-xl'><MdBalcony/></span>
                <p>Balcony</p> 
              </div>
              )} 
                {amenities.terrace == true && (
                <div className="flex gap-5">
                <span className=' text-xl'><TbBrandTerraform/></span>
                <p>Terrace</p> 
              </div>
              )} 
                {amenities.chimney == true && (
                <div className="flex gap-5">
                <span className=' text-xl'><FaHouseChimney/></span>
                <p>Chimney</p> 
              </div>
              )} 
                {amenities.minibar == true && (
                <div className="flex gap-5">
                <span className=' text-xl'><HiMiniBarsArrowUp/></span>
                <p>Balcony</p> 
              </div>
              )} 
            </div>
        </div>
            ) : null
        }
    </div>
  )
}

export default AmenityOfProperty