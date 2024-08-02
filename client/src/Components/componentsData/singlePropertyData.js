import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { singlePropertyReducer } from '../../controller/data/singleProperty/singlePropertySlice'

function singlePropertyData() {
    const {propertyId} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(singlePropertyReducer(propertyId))
    },[])
    console.log({proptyIdFromData:propertyId})
    const property = useSelector(state=> state.singleProperty.property)
    console.log({property})
    //const property = propert.singleProperty
    console.log({proprtyFromRedux:property})
  return {...property}
}

export default singlePropertyData