import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProperties } from '../../../controller/data/AllPropertySlice/allPropertySlice'
import { img1 } from '../../Data/Images'
import ImageSlider from '../../Home/ImageSlider'
import { Link } from 'react-router-dom'
import singlePropertyData from '../../componentsData/singlePropertyData'

function ReleatedProperty({id,category}) {
  const houses = useSelector((state)=> state.allProperties.properties)
  const searchedHome = useSelector(state => state.searchedHomeReducer.searched)
  const dispatch = useDispatch()
  let homes = null
  searchedHome.length != 0 ? homes = searchedHome : homes =  houses
  let arr = []
 if(homes.length){
  const find = homes.find(property => property._id == id)
  if(find){ 
    for(let home of homes){
      if (home != find){
        arr.push(home)
      }
      //console.log({arr})
    }
  }
 }

 useEffect(()=>{
  if(arr.length == 0){
    dispatch(fetchAllProperties(JSON.stringify({category})))
   }
 },[homes])
  return (
    <div className='border-y-[1px] border-y-neutral-300 py-10 gap-6 font-serif'>
     <h3 className=' py-5 text-xl font-semibold'> Releated Property</h3>
      <div className="container grid grid-cols-1 md:grid-cols-3  xl:grid-cols-4 gap-4">
        {
          arr.map(({name,price,subCategory,images,category,details,_id},i) => {    
            return (
                <div style={{width:"100%" ,height:'auto'}} key={i} className=' h-auto mt-2 bg-white shadow-lg   shadow-neutral-300'>
              
                  <div style={{width:'100%', height:'auto' , height:'250px' }}>
                  <ImageSlider slide={images}/>
                  </div>
                          <div className='flex flex-col gap-1 px-5 py-2'>
                            <h2 className=' text-neutral-700 font-medium text-xl'>{name}</h2>
                            <h2 className=' text-neutral-600 font-medium text-sm'>{details.bedroom} bed, {details.bathroom}ba {price}$ per M</h2>
                            <h2 className=' text-neutral-900 font-medium text-md'>{subCategory}</h2>
                          </div>
                          <div className='flex justify-end px-5 py-2'>
                              <Link onClick={()=> singlePropertyData()} to={`/detail-of-property/${_id}`} className='w-[48%] text-white font-bold text-sm text-center bg-fuchsia-700 px-3 hover:bg-fuchsia-900 rounded-md items-center py-2'>Detail</Link>
                          </div>
                </div>
            )
        })
        }
      </div>
      </div>
  )
}

export default ReleatedProperty