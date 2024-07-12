import React, { useEffect, useState } from 'react'
function EmptyPage() {
const [samp, setSamp] = useState(<div></div>)
useEffect(()=>{
    setTimeout(() => {
        setSamp(
            <div className='w-full h-full bg-white p-40 '>Empty yet</div>
        )
      }, 20);
   },[])
   return(
    samp
   )
}

export default EmptyPage