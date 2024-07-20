import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllProperties } from '../../../controller/data/AllPropertySlice/allPropertySlice'

function RoomsFilter({setRoom,room}) {
    const dispatch = useDispatch()
  const searchHandler = (room) =>{
      if(room){
      dispatch(fetchAllProperties(JSON.stringify({room:room})))
      console.log(room)
      }
      setRoom(false)
  }
    const rooms = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div onMouseLeave={()=>setRoom(false)} className={`w-40 h-auto  bg-neutral-700 shadow-md shadow-black  ${!room && 'hidden'} rounded-md mt-4 z-10 absolute `}>
    <div className='w-5 h-5 rotate-45 -mt-2  bg-neutral-700 ml-[10%]'></div>
    <div>
      {
        rooms.map((room,i) =>{
          return(
            <button onClick={()=> searchHandler(room)} key={i} className='w-[98%] h-8 bg-slate-600 m-1 text-white font-bold px-10 py-1 hover:bg-pink-700'>
              {room}
            </button>
          )
        })
      }
    </div>
    </div>
  )
}

export default RoomsFilter