import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { landlordPropertyReducer } from '../../controller/data/LandlordProperty/landlordPropertySlice'

function landlordProperty() {
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(landlordPropertyReducer()) 
    },[])
    const listOfProperty = useSelector(state => state.landlordProperty.property)
  return listOfProperty
}

export default landlordProperty