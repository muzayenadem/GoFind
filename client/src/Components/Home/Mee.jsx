import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProperties } from '../../controller/data/AllPropertySlice/allPropertySlice'
import MainMap from './MainMap'

function Mee({property}) {
  const locationWithName = {property}
    const dispatch = useDispatch()
    useEffect(()=>{
     dispatch( fetchAllProperties(JSON.stringify({category:property.category})))
    },[])
    const houses = useSelector((state)=> state.allProperties.properties)
    const searchedHome = useSelector(state => state.searchedHomeReducer.searched)
    let homes = null
    searchedHome.length != 0 ? homes = searchedHome : homes =  houses
  return (
   <div>
      <div className=''>
      <MainMap homes={homes}/>
    </div>
   </div>
  )
}
export default Mee