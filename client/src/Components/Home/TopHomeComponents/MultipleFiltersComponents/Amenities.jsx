import React from 'react'

function Amenities({amenities,setAmenities}) {
    const {wifi,pool,balcony,kitchen,parking,tv,airCondition,petFriendly,washingMachine,
        chimney,terrace,minibar,swimmingPool,electricVehicleCharge,garden,all
    } = amenities
    console.log({amenities})

    const amenitiesComponent =[
        {title:'Pet-friendly',input:<input  type='checkbox' id='checkBox' onChange={()=> setAmenities({...amenities,petFriendly:!petFriendly})} checked={petFriendly} className='size-5'/>},
        {title:'Kitchen',input:<input  type='checkbox' id='checkBox'  onChange={()=> setAmenities({...amenities,kitchen:!kitchen})} checked={kitchen}  className='size-5'/>},
        {title:'Washing machines',input:<input  type='checkbox' id='checkBox'   onChange={()=> setAmenities({...amenities,washingMachine:!washingMachine})} checked={washingMachine}   className=' size-5'/>},
        {title:'Pool',input: <input  type='checkbox' onChange={()=> setAmenities({...amenities,pool:!pool})} checked={pool} id='checkBox' className='size-5'/>},
        {title:'Tv',input: <input  type='checkbox' onChange={()=> setAmenities({...amenities,tv:!tv})} checked={tv} id='checkBox' className='size-5'/>},
        {title:'WiFi',input: <input  type='checkbox' id='checkBox' onChange={()=> setAmenities({...amenities,wifi:!wifi})} checked={wifi} className='size-5'/>},
        {title:'parking',input:<input  type='checkbox' id='checkBox'   onChange={()=> setAmenities({...amenities,parking:!parking})} checked={parking}  className=' size-5'/>},
        {title:'Air Condition', input:<input  type='checkbox' id='checkBox'   onChange={()=> setAmenities({...amenities,airCondition:!airCondition})} checked={airCondition}   className=' size-5'/>},
        {title:'Balcony/Patio',input: <input  type='checkbox' id='checkBox'   onChange={()=> setAmenities({...amenities,balcony:!balcony})} checked={balcony}   className=' size-5'/>},
        {title:'Chimney',input: <input  type='checkbox' onChange={()=> setAmenities({...amenities,chimney:!chimney})} checked={chimney} id='checkBox' className='size-5'/>},
        {title:'Terrace',input: <input  type='checkbox' onChange={()=> setAmenities({...amenities,terrace:!terrace})} checked={terrace} id='checkBox' className='size-5'/>},
        {title:'Minibar',input: <input  type='checkbox' id='checkBox' onChange={()=> setAmenities({...amenities,minibar:!minibar})} checked={minibar} className='size-5'/>},
        {title:'Swimming Pool',input:<input  type='checkbox' id='checkBox'   onChange={()=> setAmenities({...amenities,swimmingPool:!swimmingPool})} checked={swimmingPool}  className=' size-5'/>},
        {title:'Electriv Vehicle Charger', input:<input  type='checkbox' id='checkBox'   onChange={()=> setAmenities({...amenities,electricVehicleCharge:!electricVehicleCharge})} checked={electricVehicleCharge}   className=' size-5'/>},
        {title:'Garden',input: <input  type='checkbox' id='checkBox'   onChange={()=> setAmenities({...amenities,garden:!garden})} checked={garden}   className=' size-5'/>},

    ]
  return (
    <div className='py-6 px-3 flex gap-5 flex-col border-b-[1px] border-b-neutral-300  '>
    <h2 className='text-xl font-bold '>Amenities</h2>
    <div className='grid grid-cols-1 gap-4 px-10 tablet:grid-cols-2 lg:grid-cols-3'>
        {
            amenitiesComponent.map(({title,input},i)=>{
                return (
                    <div key={i}>
                        <div className='flex gap-2 '>
                            {input}
                            <label htmlFor="checkbox">{title}</label>
                        </div>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default Amenities