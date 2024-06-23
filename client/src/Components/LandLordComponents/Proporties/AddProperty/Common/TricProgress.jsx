import React from 'react'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'
import { useSelector } from 'react-redux'
function TricProgress({page}) {
  const category = useSelector(state => state.propertyType.category)
  console.log({category})
  let homePage = 0
  if(category == 'apartment'){
   homePage = page + 2
  }else if (category == 'hotels'){
   homePage = page + 1
  }else{
   homePage = page
  }
  return (
   <div className='container'>
    <div className='mt-10 flex-col  md:flex-row flex md:py-20 md:px-10 px-5 md:h-[100vh] sticky left-0 top-0 '>
    <div className='md:h-auto md:w-[2px] hidden md:block w-auto h-[3px] bg-neutral-400 rounded-md'></div>
    <div className='flex md:block'>
    <div  className='w-full h-1/6 flex group '>
               <div className='md:w-10 w-16  h-[5px] bg-neutral-400 mt-6 relative'>
                <span className={`w-7 h-7  ${homePage <  4 ? 'bg-blue-700': 'bg-green-700'}  rounded-full absolute -top-3 -left-3 flex justify-center items-center  bg-opacity-60`}>
                    {/* <span className='w-3 h-3 bg-neutral-400 rounded-full  inline-flex group-hover:bg-red-600 duration-300'>
                    </span> */}
                    <span className={`text-xl ${homePage < 4 ? 'bg-blue-700': 'bg-green-700'} rounded-full w-[70%] h-[70%] flex justify-center items-center text-white font-bold`}>{homePage <  4 ? 1 : <IoCheckmarkDoneCircle/>}</span>
                    </span>
               </div>
               <div className={`md:flex hidden  h-10 w-32 py-2 ${homePage < 4 ? 'bg-blue-700': 'bg-green-700'}  text-center  text-white px-4 rounded-md mt-1.5 `}>Programming</div>
            </div>



            <div  className='w-full h-1/6 flex group'>
               <div className='md:w-10 w-16 h-[5px] bg-neutral-400 mt-6 relative'>
                <span className={`w-7 h-7 ${homePage == 4? 'bg-blue-700': ''} ${homePage > 4 && 'bg-green-700'} ${homePage < 4 && 'bg-neutral-500'} rounded-full absolute -top-3 -left-3 flex justify-center items-center  bg-opacity-60`}>
                    {/* <span className='w-3 h-3 bg-neutral-400 rounded-full  inline-flex group-hover:bg-red-600 duration-300'>
                    </span> */}
                    <span className={`text-xl ${homePage == 4 ? 'bg-blue-700' :''} ${homePage > 4 ? 'bg-green-700':''} rounded-full w-[70%] h-[70%] bg-neutral-600 flex justify-center items-center text-white font-bold ${homePage < 4 ? 'bg-neutral-600':''}`}>{homePage <= 4 ? 2 : <IoCheckmarkDoneCircle/>}</span>
                   </span>
               </div>
               <div className={`md:flex hidden h-10 w-32 py-2 text-white  ${homePage == 4 ? 'bg-blue-700' :''} ${homePage > 4 ? 'bg-green-700':''}  ${homePage < 4 ? 'bg-neutral-600':''} text-center text-white px-4 rounded-md mt-1.5  `}>Programming</div>
            </div>


            <div  className='w-full h-1/6 flex group'>
               <div className='md:w-10 w-16 h-[5px] bg-neutral-400 mt-6 relative'>
                <span className={`w-7 h-7 ${homePage == 5? 'bg-blue-700': ''} ${homePage > 5 && 'bg-green-700'} ${homePage < 5 && 'bg-neutral-500'} rounded-full absolute -top-3 -left-3 flex justify-center items-center  bg-opacity-60`}>
                    {/* <span className='w-3 h-3 bg-neutral-400 rounded-full  inline-flex group-hover:bg-red-600 duration-300'>
                    </span> */}
                    <span className={`text-xl ${homePage == 5 ? 'bg-blue-700' :''} ${homePage > 5 ? 'bg-green-700':''} rounded-full w-[70%] h-[70%] bg-neutral-600 flex justify-center items-center text-white font-bold ${homePage < 5 ? 'bg-neutral-600':''}`}>{homePage <= 5 ? 3 : <IoCheckmarkDoneCircle/>}</span>
                    </span> 
               </div>
               <div className={`md:flex hidden h-10 w-32 py-2  ${homePage == 5 ? 'bg-blue-700' :''} ${homePage > 5 ? 'bg-green-700':''}  ${homePage < 5 ? 'bg-neutral-600':''} text-center text-white px-4 rounded-md mt-1.5  `}>Programming</div>
            </div>


            <div  className='w-full h-1/6 flex group'>
               <div className='md:w-10 w-16 h-[5px] bg-neutral-400 mt-6 relative'>
                <span className={`w-7 h-7 ${homePage == 6? 'bg-blue-700': ''} ${homePage > 6 && 'bg-green-700'} ${homePage < 6 && 'bg-neutral-500'} rounded-full absolute -top-3 -left-3 flex justify-center items-center  bg-opacity-60`}>
                    {/* <span className='w-3 h-3 bg-neutral-400 rounded-full  inline-flex group-hover:bg-red-600 duration-300'>
                    </span> */}
                    <span className={`text-xl ${homePage == 6 ? 'bg-blue-700' :''} ${homePage > 6 ? 'bg-green-700':''} rounded-full w-[70%] h-[70%] bg-neutral-600 flex justify-center items-center text-white font-bold ${homePage < 6 ? 'bg-neutral-600':''}`}>{homePage <= 6 ? 4 : <IoCheckmarkDoneCircle/>}</span>
                    </span> 
               </div>
               <div className={`md:flex hidden h-10 w-32 py-2  ${homePage == 6 ? 'bg-blue-700' :''} ${homePage > 6 ? 'bg-green-700':''}  ${homePage < 6 ? 'bg-neutral-600':''} text-center text-white px-4 rounded-md mt-1.5  `}>Programming</div>
            </div>


            <div  className='w-full h-1/6 flex group'>
               <div className='md:w-10 w-16 h-[5px] bg-neutral-400 mt-6 relative'>
                <span className={`w-7 h-7 ${homePage == 7? 'bg-blue-700': ''} ${homePage > 7 && 'bg-green-700'} ${homePage < 7 && 'bg-neutral-500'} rounded-full absolute -top-3 -left-3 flex justify-center items-center  bg-opacity-60`}>
                    {/* <span className='w-3 h-3 bg-neutral-400 rounded-full  inline-flex group-hover:bg-red-600 duration-300'>
                    </span> */}
                      <span className={`text-xl ${homePage == 7 ? 'bg-blue-700' :''} ${homePage > 7 ? 'bg-green-700':''} rounded-full w-[70%] h-[70%] bg-neutral-600 flex justify-center items-center text-white font-bold ${homePage < 7 ? 'bg-neutral-600':''}`}>{homePage <= 7 ? 5 : <IoCheckmarkDoneCircle/>}</span>
                      </span> 
               </div>
               <div className={`md:flex hidden h-10 w-32 py-2  ${homePage == 7 ? 'bg-blue-700' :''} ${homePage > 7 ? 'bg-green-700':''}  ${homePage < 7 ? 'bg-neutral-600':''} text-center text-white px-4 rounded-md mt-1.5  `}>Programming</div>
            </div>


            <div  className='w-full h-1/6 flex group'>
               <div className='md:w-10 w-16 md:h-[5px]  bg-neutral-400 mt-6 relative'>
                <span className={`w-7 h-7 ${homePage == 8 ? 'bg-blue-700': ''} ${homePage > 8 && 'bg-green-700'} ${homePage < 8 && 'bg-neutral-500'} rounded-full absolute -top-3 -left-3 flex justify-center items-center  bg-opacity-60`}>
                    {/* <span className='w-3 h-3 bg-neutral-400 rounded-full  inline-flex group-hover:bg-red-600 duration-300'>
                    </span> */}
                    <span className={`text-xl ${homePage == 8 ? 'bg-blue-700' :''} ${homePage > 8 ? 'bg-green-700':''} rounded-full w-[70%] h-[70%] bg-neutral-600 flex justify-center items-center text-white font-bold ${homePage < 8 ? 'bg-neutral-600':''}`}>{homePage <= 8 ? 6 : <IoCheckmarkDoneCircle/>}</span>
                    </span> 
               </div>
               <div className={`md:flex hidden h-10 w-32 py-2  ${homePage == 8 ? 'bg-blue-700' :''} ${homePage > 8 ? 'bg-green-700':''}  ${homePage < 8 ? 'bg-neutral-600':''} text-center text-white px-4 rounded-md mt-1.5  `}>Prossssssgramming</div>
            </div>

        
     </div>
    </div>
  </div>
  )
}

export default TricProgress