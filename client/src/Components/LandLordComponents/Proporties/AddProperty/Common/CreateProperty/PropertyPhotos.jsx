import React, {useState, useRef} from 'react'
import { useSelector,useDispatch } from 'react-redux'

function PropertyPhotos() {
    const [images, setImages] = useState([])
    const [isDraging, setIsDraging] = useState(false)
    const fileRef = useRef()

    const selectImages = () => {
        fileRef.current.click()
    }
    const onFileSelect = () =>{
    }


    const propertyType = useSelector(state => state.propertyType.subCategory)
  return (
    <div className='container md:w-[1000px] mx-auto md:mx-20 py-10 justify-center items-center'>
        <div className='  gap-6 flex flex-col md:w-[90%] '>
            <h1 className='head1 text-center'>Fill all steps carefully for your {propertyType}</h1>
            <div className='bg-white py-10 px-6 gap-3 rounded-md shadow-md shadow-neutral-700 flex flex-col '>
                <h1 className='title'>Leave the picture of your {propertyType} </h1>
                <div className="flex gap-10 py-10 content-center items-center justify-center w-full  border-dashed border-blue-800 border-[2px] text-center">
                    <p className=''>Drop images here</p>
                    <label>
                    <p className='text-bue-700' onClick={selectImages}>Browse</p>
                    <input type='file' name='file' ref={fileRef} onChange={(e)=> onFileSelect(e.target.value)} multiple className='hidden'></input>
                    </label>
                </div>
                <div className="container flex justify-start flex-wrap overflow-y-auto mt-6">
                    <div className='relative w-[75px] h-[75px] mb-4 ml-4'>
                        <span className=' absolute top-1 right-3 text-xl font-bold'>&times;</span>
                        <img className='w-[100%] h-[100%] rounded-md' src='' alt=''/>
                    </div>
                </div>
                <button className='w-[100%] bg-blue-600 rounded-md py-2 text-white font-semibold hover:bg-blue-900'>Upload</button> 
            </div>
        </div>
    </div>
  )
}

export default PropertyPhotos