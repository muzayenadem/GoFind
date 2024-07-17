
import { MdOutlineClear } from "react-icons/md";
import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { Link } from "react-router-dom";
import PropertyList from "./PropertyList";
function MainProperty() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')
    const data = [
        {
            label:'Muzayen Adem',
            value:1
        },
        {
            value:2,
            label:'As campony standard'
        },
    ]
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler = value => {
      setValue(value)
    }
  return (
    <>
      <div className='container w-full    md:mx-auto py-20 md:px-20'>
        <div className="flex flex-wrap px-6 justify-between w-[100%]">
            <div>
                <h1>Group Homepage</h1>
            </div>
            <div>
                <button onClick={()=> setOpen(true)} className='text-center py-2 px-6 w-52 bg-blue-600 text-white boreder-[1px] border-white hover:bg-blue-900 '>Add Property</button>
            </div>
        </div>
     <PropertyList/>
    </div>
    <dialog open={open}>
    <div className='fixed left-[5%] w-[90%] top-[15%] md:left-[33%] md:w-[30%]  p-8 bg-white rounded-2xl shadow-lg '>
        <div className="flex justify-between w-full h-16 border-b-[1px] border-b-neutral-300">
            <h1 className='title' >Add property</h1>
            <span onClick={()=> setOpen(!open)} className='title'><MdOutlineClear/></span>
        </div>
        <div className="flex flex-col gap-1 w-full py-4" >
            <p className='title2'>Add to Contract under the name of the Legal Entity</p>
            <Select options={data} className='w-full'/>
        </div>
        <div className="flex flex-col gap-1 w-full py-4" >
            <p className='title2'>ACountry/region</p>
            <Select options={options} value={value} onChange={changeHandler} />
        </div>
        <div>
            <Link to='types-of-property'>
            <button className=' bg-fuchsia-700 text-white text-center w-52 h-12 py-2 rounded-lg'>Build your property</button>
            </Link>
        </div>
    </div>
    </dialog>
    </>
  )
}

export default MainProperty