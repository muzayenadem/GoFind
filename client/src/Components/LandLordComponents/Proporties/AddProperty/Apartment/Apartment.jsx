import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import One from '../Common/One'
import Multiple from '../Common/Multiple'
import PropertyName from '../Common/CreateProperty/PropertyName'
import QuantityOfPropertyAndPlace from '../Common/QuantityOfPropertyAndPlace'
import { apartmentNextpage, apartmentPreviousPage } from '../../../../../controller/AddProperty/NextPrev'
import TricProgress from '../Common/TricProgress'
import PropertyEmenities from '../Common/CreateProperty/PropertyEmenities'
import PropertyDetails from '../Common/CreateProperty/PropertyDetails'
import PropertyPermition from '../Common/CreateProperty/PropertyPermition'
import PropertyPhotos from '../Common/CreateProperty/PropertyPhotos'
import PriceSystem from '../Common/CreateProperty/PriceSystem'
import SubmittingPropertyPage from '../Common/CreateProperty/SubmittingPropertyPage'

function Apartment() {
    const apartmentPage = useSelector(state => state.NextPrev.apartmentPage)
    const property = useSelector(state => state.propertyType.type)
    const multiple = useSelector(state => state.propertyType.multiple)
    console.log({property})
    const propertyType = useSelector(state => state.propertyType)
    console.log({apartmentPage})
    console.log({propertyType})
    return (
      <div className='flex gap-2 justify-start flex-wrap-reverse md:flex-nowrap'>

      <div className='md:w-[90%] '>
   {apartmentPage == 0 &&  <QuantityOfPropertyAndPlace page={apartmentPage} next={apartmentNextpage} previous={apartmentPreviousPage}/>} 
   {apartmentPage == 1 && multiple === false && <One page={apartmentPage} next={apartmentNextpage} previous={apartmentPreviousPage}/> }
   {apartmentPage == 1 && multiple === true && <Multiple page={apartmentPage} next={apartmentNextpage} previous={apartmentPreviousPage}/>}
   {apartmentPage == 2 && <PropertyName page={apartmentPage} next={apartmentNextpage} previous={apartmentPreviousPage}/>}
   {apartmentPage == 2 && <PropertyEmenities page={apartmentPage} next={apartmentNextpage} previous={apartmentPreviousPage}/>}
   {apartmentPage == 3 && <PropertyDetails page={apartmentPage} next={apartmentNextpage} previous={apartmentPreviousPage}/>}
   {apartmentPage == 4 && <PropertyPermition page={apartmentPage} next={apartmentNextpage} previous={apartmentPreviousPage}/>}
   {apartmentPage == 5 && <PropertyPhotos page={apartmentPage} next={apartmentNextpage} previous={apartmentPreviousPage}/>}
   {apartmentPage == 6 && <PriceSystem page={apartmentPage} next={apartmentNextpage} previous={apartmentPreviousPage}/>}
   {apartmentPage == 7 && <SubmittingPropertyPage page={apartmentPage} next={apartmentNextpage} previous={apartmentPreviousPage}/>}
   </div>
      <div className="w-25%">
      <TricProgress page={apartmentPage}/>
      </div>
    </div>
  )
}

export default Apartment

 