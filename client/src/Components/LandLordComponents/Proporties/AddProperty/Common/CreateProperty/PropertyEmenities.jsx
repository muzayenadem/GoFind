import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAirCondition, setAllAmenities, setBalcony, setChimney, setElectricVehicleCharge, setGarden, setKitchen, setMinibar, setNotAllAmenities, setParking, setPool, setSwimming, setTerrace, setTv, setWashingMachines, setWifi, setpetFriendly } from '../../../../../../controller/AddProperty/propertyType'


function PropertyEmenities() {
  const [allSelect,SetAllSellect] = useState(false)
  const propertyType = useSelector(state => state.propertyType)
  const petFriendly = useSelector(state => state.propertyType.amenities.petFriendly)
  const kitchen = useSelector( state => state.propertyType.amenities.kitchen)
  const wifi = useSelector(state => state.propertyType.amenities.wifi)
  const washingMachine = useSelector(state => state.propertyType.amenities.washingMachine)
  const pool = useSelector(state => state.propertyType.amenities.pool)
  const tv = useSelector(state=> state.propertyType.amenities.tv)
  const parking = useSelector(state => state.propertyType.amenities.parking)
  const balcony = useSelector(state=> state.propertyType.amenities.balcony)
  const airCondition = useSelector(state => state.propertyType.amenities.airCondition)
  const chimney = useSelector(state => state.propertyType.amenities.chimney)
  const vehicleCharge = useSelector(state => state.propertyType.amenities.electricVehicleCharge)
  const swimmingPool = useSelector(state => state.propertyType.amenities.swimmingPool)
  const garden = useSelector(state => state.propertyType.amenities.garden)
  const minibar = useSelector(state => state.propertyType.amenities.minibar)
  const terrace = useSelector(state => state.propertyType.amenities.terrace)
  const all = useSelector(state => state.propertyType.amenities.all)

  const dispatch = useDispatch()
    const checked = [
        {title:'Pet-friendly',input: <input type="checkbox"  onChange={()=>dispatch(setpetFriendly())} checked={petFriendly}  className="group size-5 rounded-md bg-blue-700 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-blue-700"/>},
        {title:'Kitchen', input: <input type="checkbox"  onChange={()=>dispatch(setKitchen())} checked={kitchen}  className="group size-5 rounded-md bg-blue-700 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-blue-700"/>},
        {title:'Washing machines',input: <input type="checkbox"  onChange={()=>dispatch(setWashingMachines())} checked={washingMachine}  className="group size-5 rounded-md bg-blue-700 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-blue-700"/>},
        {title:'pool', input: <input type="checkbox"  onChange={()=>dispatch(setPool())} checked={pool}  className="group size-5 rounded-md bg-blue-700 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-blue-700"/>},
        {title:'Wi-Fi', input: <input type="checkbox"  onChange={()=>dispatch(setWifi())} checked={wifi}  className="group size-5 rounded-md bg-blue-700 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-blue-700"/>},
        {title:'Tv',input: <input type="checkbox"  onChange={()=>dispatch(setTv())} checked={tv}  className="group size-5 rounded-md bg-blue-700 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-blue-700"/>},
        {title:'Parking', input: <input type="checkbox"  onChange={()=>dispatch(setParking())} checked={parking}  className="group size-5 rounded-md bg-blue-700 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-blue-700"/>},
        {title:'Pito/Balcony', input: <input type="checkbox"  onChange={()=>dispatch(setBalcony())} checked={balcony}  className="group size-5 rounded-md bg-blue-700 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-blue-700"/>},
        {title:'Air condition', input: <input type="checkbox"  onChange={()=>dispatch(setAirCondition())} checked={airCondition}  className="group size-5 rounded-md bg-blue-700 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-blue-700"/>},
        {title:'chimney', input: <input type="checkbox"  onChange={()=>dispatch(setChimney())} checked={chimney}  className="group size-5 rounded-md bg-blue-700 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-blue-700"/>},
        {title:'Vehicle charging', input: <input type="checkbox"  onChange={()=>dispatch(setElectricVehicleCharge())} checked={vehicleCharge}  className="group size-5 rounded-md bg-blue-700 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-blue-700"/>},
        {title:'Swimming pool',input: <input type="checkbox"  onChange={()=>dispatch(setSwimming())} checked={swimmingPool}  className="group size-5 rounded-md bg-blue-700 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-blue-700"/>},
        {title:'Minibar',input: <input type="checkbox"  onChange={()=>dispatch(setMinibar())} checked={minibar}  className="group size-5 rounded-md bg-blue-700 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-blue-700"/>},
        {title:'Garden view', input: <input type="checkbox"  onChange={()=>dispatch(setGarden())} checked={garden}  className="group size-5 rounded-md bg-blue-700 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-blue-700"/>},
        {title:'Terrace', input: <input type="checkbox"  onChange={()=>dispatch(setTerrace())} checked={terrace}  className="group size-5 rounded-md bg-blue-700 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-blue-700"/>},

    ]

    const sellectAll = () =>{
      if(all == false){
        dispatch(setAllAmenities())
      }else{
        dispatch(setNotAllAmenities())
      }

   //   SetAllSellect(!allSelect)
    }
    console.log({Amenities:propertyType.amenities})
  return (
    <div>
    <h1 className='title2'> Amenities</h1>
    <div>
    <label className='label cursor-pointer flex gap-4 px-10 mt-5' >
    <p>Sellect All</p>
        <input type="checkbox" onChange={sellectAll} checked={all} className="group size-5 rounded-md bg-blue-700 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-blue-700"/>
        </label>
      <div className="form-control grid grid-cols-2 gap-5 md:grid-cols-3 px-6 py-6">
        {
            checked.map(({title,input},i)=>{
                return(
                    <label key={i} className="label cursor-pointer gap-4 flex">
                   {input}
                    <span className="label-text">{title}</span> 
                  </label>
                )
            })
        }
      </div>
    </div>
  </div>
  )
}

export default PropertyEmenities