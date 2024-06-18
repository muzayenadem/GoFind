import React, { useEffect, useMemo, useRef, useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'
import { setName } from '../../../../../../controller/AddProperty/propertyType'
import countryList from 'react-select-country-list'
import Select from 'react-select'
import SearchLocation from '../Maps/SearchLocation'


function PropertyName({page,next,previous}) {
    const [PropertyName,setPropertyName] = useState('')
    const [country,setCountry] = useState('')
    const [enable,setEnable] = useState(false)
    const [postNumber,setPostNumber] = useState('')
    const [city,setCity] = useState('')
    

    const mapRef = useRef();
    const [markers, setMarkers] = useState([]);
  
    const handleLocationSelect = (location) => {
    //   const { lat, lon } = location;
    //   mapRef.current.setView([lat, lon], 13);
    //   setMarkers([...markers, { lat: parseFloat(lat), lon: parseFloat(lon) }]);
    };
    const dispatch = useDispatch()
    const clickHndler = () =>{
        dispatch(setName(PropertyName))
        dispatch(next())
        console.log({maaliif:PropertyName})
    }
    const propertyType = useSelector(state => state.propertyType.subCategory)
    const options = useMemo(() => countryList().getData(), [])
    const changeHandler = async value => {
       await enableHandler()
        setCountry(value)
      }
       

      const enableHandler = () =>{
        if(propertyType != '' && postNumber != '' && country != '' && city != ''){
            setEnable(true)
        }
        console.log({postNumber})  
      }
      console.log({country})
      console.log({postNumber})
      console.log({PropertyName})

  return (
    <>
       <div className=' mx-auto items-center justify-center md:mx-20 w-[96%] m-[2%] py-20 '>
        <div className='  gap-6 flex flex-col md:w-[90%] '>
            <h1 className='head1 text-center'>Fill all steps carefully for your {propertyType}</h1>
        <div className=''>
        <div className='bg-white py-10 px-6 gap-3 w-[96%] m-[2%] rounded-md shadow-md shadow-neutral-700 flex flex-col '>
            <div className="flex flex-col gap-6 border-b-[1px] border-b-neutral-300 py-3">
            <h1 className='title2'>What is the name of your {propertyType} ?</h1>
            <p className='des'>Property name</p>
            <input onInput={enableHandler} onChange={(e)=> setPropertyName(e.target.value)} className='border-[1px] md:w-[40%] rounded-sm border-neutral-500 py-2 px-6 focus:outline-none '/>
            </div>




            <div className="flex py-10 flex-col gap-8 border-b-[1px] border-b-neutral-300">
                <h1 className='title2'>Could you please tell me the location of the property you're listing?</h1>
                <div className="flex w-full justify-normal gap-5 flex-wrap" >
                    <div className="flex w-full md:w-[40%] flex-col gap-1">
                        <p className='des'>Country</p>
                    <Select options={options} value={country} onChange={changeHandler} className=''/>
                    </div>
                    <div className="flex  flex-col gap-1">
                        <p className='des'>Street name and house number</p>
                      <SearchLocation/>
                    </div>
                </div>
                <div className="flex w-full justify-normal gap-5 flex-wrap" >
                    <div className="flex md:w-[40%] flex-col gap-1">
                        <p className='des'>Post code</p>
                        <input onInput={enableHandler} onChange={(e)=> setPostNumber(e.target.value)} placeholder='eg, 1000' className='px-4 py-2 border-[1px] w-40 border-neutral-400 focus:outline-none' />
                    </div>
                    <div className="flex md:w-[40%] flex-col gap-1">
                        <p className='des'>city</p>
                        <input onInput={enableHandler} onChange={(e)=> setCity(e.target.value)}  placeholder='City' className='px-4 py-2 border-[1px] border-neutral-400 focus:outline-none' />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8 border-b-[1px] border-b-neutral-300 py-10 ">
                <h1 className='title2'>nex new that i propably may work on i think</h1>
            </div>



        </div>
        </div>



        
        <div className='flex gap-2  w-[96%] m-[2%]'>
            <div  onClick={()=> dispatch(previous())} className='w-[25%] flex justify-center items-center py-3 bg-white border-[1px] border-fuchsia-200  '>
                <span className='font-bold text-2xl text-fuchsia-700 '><FaChevronLeft/></span>
            </div>
            <button disabled={!enable} onClick={clickHndler} className={`w-[73%] ${enable ?  'bg-fuchsia-700 ': 'bg-neutral-300'} py-3 font-bold text-white text-center`}>Continue</button>
        </div>
        </div>
        </div> 
    </>
  )
}

export default PropertyName