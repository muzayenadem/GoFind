import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { landlordProfileReducer } from '../../controller/data/LandLordSlice/landlordProfileSlice'

function landlordProfileData() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(landlordProfileReducer())
    },[])
    const profile = useSelector(state => state.landlordProfile.data)
  return {
    id:profile._id,
    fname:profile.firstName,
    lname:profile.lastName,
    email:profile.email,
    phone:profile.phone,
    password:profile.password
  }
}

export default landlordProfileData