import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchViews } from '../../controller/specialFunctions/viewsSlice'

const viewsData = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchViews())
    },[])
    const views = useSelector(state => state.viewsReducer.views)
  return views
}

export default viewsData