import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { mainLink } from '../../../../../../controller/commonLink/mainLInk'

function SubmittingPropertyPage({page,next , previous}) {
  const dispatch = useDispatch()
  const navigate = useNavigate('')

  const propertyCategory = useSelector(state => state.propertyType.subCategory)
  const property = useSelector(state => state.propertyType)
  console.log({property})
  const submitHandeler = async ()=>{
    const response = await axios.post(`${mainLink}/api-landlord-add-property`,{property})
    .then( res => {
      return res.data
    })
    .catch(err =>{
      return err.response.data
    })
    console.log({response})
  }
  return (
    <div className='container md:w-[1000px] mx-auto md:mx-20 py-10 justify-center items-center'>
        <div className='  gap-6 flex flex-col md:w-[90%] '>
            <h1 className='head1 text-center'>Almost done!!!</h1>
            <div className='bg-white py-10 px-6 gap-3 rounded-md shadow-md shadow-neutral-700 flex flex-col '>
               <h1 className='title'>You have done all the steps of listing {propertyCategory}! </h1>
               <h1 className='title2'>Before submitting your listing, please review all the details to ensure accuracy. Would you like to review your listing one more time, or are you ready to submit it now? </h1>
                <div className="flex justify-end pt-10 self-end gap-5 px-5 items-end">
                  <button onClick={() => dispatch(previous())} className=' bg-fuchsia-700 hover:bg-fuchsia-900 text-white font-semibold text-center px-6 rounded-md py-2'>Review</button>   
                  <button onClick={()=> submitHandeler() &   navigate('/landloard-dashboard/property')} className='bg-green-700 hover:bg-green-900 text-white font-semibold text-center px-10 rounded-md py-2'>Submitt</button>                    
                </div>
            </div>   
        </div>
    </div>
  )
}

export default SubmittingPropertyPage