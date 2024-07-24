import React from 'react'

function AccomodationTypes({accomodation,setAccomodotion}) {
    const {hotel,apartment,house,chalet,camping,holidayPark,farmHouse,bedAndBreackfast,other} = accomodation
    console.log({accomodation})
    const allAccomodation =[
        {title:'House',input:<input  type='checkbox' id='checkBox' onChange={()=> setAccomodotion({...accomodation,house:!house})} checked={house} className='size-5'/>},
        {title:'Aparment',input:<input  type='checkbox' id='checkBox'  onChange={()=> setAccomodotion({...accomodation,apartment:!apartment})} checked={apartment}  className='size-5'/>},
        {title:'Hotel',input:<input  type='checkbox' id='checkBox'   onChange={()=> setAccomodotion({...accomodation,hotel:!hotel})} checked={hotel}   className=' size-5'/>},
        {title:'FarmHouse',input: <input  type='checkbox' onChange={()=> setAccomodotion({...accomodation,farmHouse:!farmHouse})} checked={farmHouse} id='checkBox' className='size-5'/>},
        {title:'Chalet',input: <input  type='checkbox' onChange={()=> setAccomodotion({...accomodation,chalet:!chalet})} checked={chalet} id='checkBox' className='size-5'/>},
        {title:'Camping',input: <input  type='checkbox' id='checkBox' onChange={()=> setAccomodotion({...accomodation,camping:!camping})} checked={camping} className='size-5'/>},
        {title:'Bed and breakfast',input:<input  type='checkbox' id='checkBox'   onChange={()=> setAccomodotion({...accomodation,bedAndBreackfast:!bedAndBreackfast})} checked={bedAndBreackfast}  className=' size-5'/>},
        {title:'Holiday park', input:<input  type='checkbox' id='checkBox'   onChange={()=> setAccomodotion({...accomodation,holidayPark:!holidayPark})} checked={holidayPark}   className=' size-5'/>},
        {title:'Other',input: <input  type='checkbox' id='checkBox'   onChange={()=> setAccomodotion({...accomodation,other:!other})} checked={other}   className=' size-5'/>},

    ]
  return (
    <div className='py-6 px-3 flex gap-5 flex-col border-b-[1px] border-b-neutral-300  '>
        <h2 className='text-xl font-bold '>Accommodation types</h2>
            <div className='grid grid-cols-1 gap-4 px-10 tablet:grid-cols-2 lg:grid-cols-3'>
                {
                    allAccomodation.map(({title,input},i)=>{
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

export default AccomodationTypes