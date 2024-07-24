import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { landlordTokenReducer } from '../../controller/tokens/landlordToken'

function isLandlordLoginned() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(landlordTokenReducer())
   },[])
  const landlordToken = useSelector(state => state.landlordToken.token)
  return landlordToken
}

export default isLandlordLoginned