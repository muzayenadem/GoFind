import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { renterProfileReducer } from '../../controller/data/RenterSlice/renterProfileSlice'

function renterProfileData() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(renterProfileReducer())
    },[])
    const profile = useSelector(state => state.renterProfile.data)
  return {
    id:profile._id,
    fname:profile.firstName,
    lname:profile.lastName,
    email:profile.email,
    phone:profile.phone,
  }
}

export default renterProfileData