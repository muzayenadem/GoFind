import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { renterTokenReducer } from '../../controller/tokens/renterToken'

function isRenterLogginned() {
  const dispatch = useDispatch()
   useEffect(()=>{
    dispatch(renterTokenReducer())
   },[])
   const renterToken = useSelector(state => state.renterToken.token)
  return renterToken
}

export default isRenterLogginned