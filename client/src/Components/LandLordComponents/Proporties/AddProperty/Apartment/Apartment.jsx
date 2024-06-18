import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import One from '../Common/One'
import Multiple from '../Common/Multiple'
import PropertyName from '../Common/CreateProperty/PropertyName'
import QuantityOfPropertyAndPlace from '../Common/QuantityOfPropertyAndPlace'
import { apartmentNextpage, apartmentPreviousPage } from '../../../../../controller/AddProperty/NextPrev'

function Apartment() {
    const apartmentPage = useSelector(state => state.NextPrev.apartmentPage)
    const property = useSelector(state => state.propertyType.type)
    const multiple = useSelector(state => state.propertyType.multiple)
    console.log({property})
    const propertyType = useSelector(state => state.propertyType)
    console.log({apartmentPage})
    console.log({propertyType})
    return (
   <>
   {apartmentPage == 0 &&  <QuantityOfPropertyAndPlace page={apartmentPage} next={apartmentNextpage} previous={apartmentPreviousPage}/>} 
   {apartmentPage == 1 && multiple === false && <One page={apartmentPage} next={apartmentNextpage} previous={apartmentPreviousPage}/> }
   {apartmentPage == 1 && multiple === true && <Multiple page={apartmentPage} next={apartmentNextpage} previous={apartmentPreviousPage}/>}
   {apartmentPage == 2 && <PropertyName page={apartmentPage} next={apartmentNextpage} previous={apartmentPreviousPage}/>}
   {apartmentPage == 3 && <h1>page 5</h1>}
   {apartmentPage == 4 && <h1>page 6</h1>}
   {apartmentPage == 5 && <h1>page 7</h1>}
   </>
  )
}

export default Apartment

 