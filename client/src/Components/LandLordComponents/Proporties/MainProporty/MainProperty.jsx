
import { MdOutlineClear } from "react-icons/md";
import React, { useState, useMemo, useEffect } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { Link } from "react-router-dom";
import PropertyList from "./PropertyList";
import landlordProfileData from "../../../componentsData/landlordProfileData";
import { useDispatch, useSelector } from "react-redux";
import { setPropertyHolder } from "../../../../controller/AddProperty/propertyType";
import { closeLandlordSidebarToggle } from "../../../../controller/Buttons/landlordToggle";
function MainProperty() {
    const [open, setOpen] = useState(false)
    const {fname, lname} = landlordProfileData()
    const [disable,setDisable] = useState(true)
    let {hold_as, country} = useSelector(state => state.propertyType.holder)
    const [holder, setHolder] = useState({hold_as, country})
    const data = [
        {
            label:`${fname} ${lname}`,
            value:1
        },
        {
            value:2,
            label:'As campony standard'
        },
    ]
    const options = useMemo(() => countryList().getData(), [])
    const dispatch = useDispatch()
  



    console.log({holder})
    useEffect(()=>{
        if(hold_as != '' && country != ''){
            setDisable(false)
        }
    },[])


    function checkIt(holder){
        return new Promise((resolve , reject) =>{
            console.log(holder.hold_as,holder.country)
             if (holder.hold_as != '' && holder.country != ''  || hold_as != '' && country != ''){
                resolve(true)
             }
             else{
                if(!holder.hold_as) return reject ('hold_us is not defined')
                if(!holder.country) return reject ('country is not defined')
             }
        })
    }
    const changeCountry = async value =>{
        if(!holder?.hold_as){
            setHolder({...holder,country:value.label, hold_as: 'h' })
        }
        else {
            setHolder({...holder,country:value.label})
        }
        dispatch(setPropertyHolder(holder))
        console.log({country,hold_as})
    console.log({holder})
         const isdata = await checkIt(holder)
         console.log({isdata})

         if(isdata){
            setDisable(false)
        }
    }
    const changeHolder = async value =>{
        if(!holder?.country){
            setHolder({...holder,hold_as:value.label, country : 'c' })
        }
        else {
            setHolder({...holder,hold_as:value.label})
        }
        dispatch(setPropertyHolder(holder))
        console.log({country,hold_as})
        console.log({holder})
        const isdata = await checkIt(holder)
        console.log({isdata})
        if(isdata){
            setDisable(false)
        }
    }

    const close = ()=>{
        dispatch(closeLandlordSidebarToggle())
    }
  return (
    <>
      <div className='container w-full    md:mx-auto py-20 md:px-20'>
        <div className="flex flex-wrap px-6 justify-between w-[100%]">
            <div>
                <h1>Group Homepage</h1>
            </div>
            <div>
                <button onClick={()=> setOpen(true) & close} className='text-center py-2 px-6 w-52 bg-blue-600 text-white boreder-[1px] border-white hover:bg-blue-900 '>Add Property</button>
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
            <Select 
            options={data} 
            defaultInputValue={hold_as ? hold_as : holder.hold_as}
            onChange={changeHolder} 
            className='w-full'/>
        </div>
        <div className="flex flex-col gap-1 w-full py-4" >
            <p className='title2'>Country/region</p>
            <Select 
            options={options} 
            defaultInputValue={country ? country : holder.country}
            // value={country ? country : holder.country}
            onChange={changeCountry} />
        </div>
        <div>
            <Link to='types-of-property'>
            <button disabled={disable}  className={`${disable ? ' bg-slate-400' : 'bg-fuchsia-700'} text-white text-center w-52 h-12 py-2 rounded-lg`}>Build your property</button>
            </Link>
        </div>
    </div>
    </dialog>
    </>
  )
}

export default MainProperty