import React, {useState, useRef, useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeImage, setImages } from '../../../../../../controller/AddProperty/propertyType'
import { FaChevronLeft } from 'react-icons/fa'

function PropertyPhotos({page,previous,next}) {
     const [photos, setPhotos] = useState([])
    const [isDraging, setIsDraging] = useState(false)
    const [enable,setEnable] = useState(true)
    const fileRef = useRef()

    const dispatch = useDispatch()
 
 
    
    const images = useSelector(state => state.propertyType.images)

    const selectImages = (e)=>{
      dispatch(setImages(e.target.files))      
    }

    
   useEffect(()=>{
    if(images.length > 0){
        setEnable(false)
    }
   },[images])


    console.log({photos})

    const propertyType = useSelector(state => state.propertyType.subCategory)
    console.log(images)
  return (
    <section className=' min-h-screen ipad:ml-[20%] tablet:w-[115%] tablet:ml-[20%] w-[96%] md:w-[90%] md:ml-[15%] lg:w-[120%] xl:w-[145%] 2xl:w-[170%] lg:ml-[25%] xl:ml-[45%] 2xl:ml-[60%] ml-[2%] py-20 justify-center items-center'>
        <div className='  gap-6 flex flex-col md:w-[90%] '>
            <h1 className='head1 text-center'>Fill all steps carefully for your {propertyType}</h1>
            <div className='bg-white py-10 px-6 gap-3 rounded-md shadow-md shadow-neutral-500 flex flex-col '>
                <h1 className='title'>Leave the picture of your {propertyType} </h1>
                <div className="flex gap-10 py-10 content-center items-center px-5 justify-center w-full  border-dashed font-bold border-blue-800 border-[2px] text-center">
                    <p className=''>Drop your {propertyType} images here</p>
                    <label>
                    <p className='text-blue-700 ' role='button' >Browse</p>
                    <input type='file' name='file'  onChange={selectImages} multiple className='hidden'></input>
                    </label>
                </div>
                <div className="container flex justify-start flex-wrap overflow-y-auto mt-6">
                    {
                        images.map((img,i)=>{
                            return (
                                <div key={i} className='relative w-[130px] h-[130px] mb-4 ml-4'>
                                <div className="flex justify-center items-center p-1 w-6 h-6 absolute top-1 right-1 bg-white rounded-full">
                                <span className='  text-xl font-bold   p-1  text-black rounded-full'  onClick={()=> dispatch(removeImage(images.indexOf(img))) & console.log({index:images.indexof(img)})}>&times;</span>
                                </div>
                                <img className='w-[100%] h-[100%] rounded-lg' src={URL.createObjectURL(img)} alt=''/>
                            </div>
                            )
                        })
                    }
                </div>
                <button onClick={()=> dispatch(next())} disabled={enable}  className={`w-[100%] ${!enable ?  'bg-blue-700 ': 'bg-neutral-400 hover:bg-neutral-500'} rounded-md py-2 text-white font-semibold hover:bg-blue-900`}>Upload</button> 
            </div>
            <div className='flex gap-2 '>
                <div  onClick={()=> dispatch(previous())} className='w-[25%] flex justify-center items-center py-3 bg-white border-[1px] border-fuchsia-200  '>
                    <span className='font-bold text-2xl text-fuchsia-700 '><FaChevronLeft/></span>
                </div>
                <button  onClick={()=> dispatch(next())} disabled={enable} className={`w-[73%]  ${!enable ?  'bg-fuchsia-700 ': 'bg-neutral-400 hover:bg-neutral-500'}  py-3 font-bold text-white text-center`}>Continue</button>
           </div>
        </div>
    </section>
  )
}

export default PropertyPhotos