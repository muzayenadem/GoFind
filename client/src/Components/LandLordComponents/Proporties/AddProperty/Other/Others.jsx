import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import PropertyName from '../Common/CreateProperty/PropertyName'
import {othersCategory } from '../Common/Categories'
import PlaceCategory from '../Common/PlaceCategory'
import MultipleOrOne from '../Common/MultipleOrOne'
import One from '../Common/One'
import Multiple from '../Common/Multiple'
import QuantityOfPropertyAndPlace from '../Common/QuantityOfPropertyAndPlace'
import MultipleOrPrivatePage from '../Common/MultipleOrPrivatePage'
import { othersNextpage,othersPreviousPage } from '../../../../../controller/AddProperty/NextPrev'
import TricProgress from '../Common/TricProgress'
import PropertyDetails from '../Common/CreateProperty/PropertyDetails'
import PropertyPermition from '../Common/CreateProperty/PropertyPermition'
import PropertyPhotos from '../Common/CreateProperty/PropertyPhotos'
import PriceSystem from '../Common/CreateProperty/PriceSystem'
import SubmittingPropertyPage from '../Common/CreateProperty/SubmittingPropertyPage'

function Others() {
  const othersPage = useSelector(state => state.NextPrev.othersPage)
  const property = useSelector(state => state.propertyType.type)
  const multiple = useSelector(state => state.propertyType.multiple)
  console.log({property})
  const propertyType = useSelector(state => state.propertyType)
  console.log({othersPage})
  console.log({propertyType})
  return (
    <div className='flex gap-2 justify-start flex-wrap-reverse md:flex-nowrap'>

    <div className='md:w-[90%] '>
    {othersPage == 0 && <MultipleOrPrivatePage page={othersPage} next={othersNextpage} previous={othersPreviousPage}/>}
    {othersPage == 1 && <PlaceCategory page={othersPage} subCategories={othersCategory} next={othersNextpage} previous={othersPreviousPage}/>}
    {othersPage == 2 && propertyType.type == 'Entire place' && <QuantityOfPropertyAndPlace page={othersPage} next={othersNextpage} previous={othersPreviousPage}/>}
    {othersPage == 2 && propertyType.type == 'A private room' && <MultipleOrOne page={othersPage} next={othersNextpage} previous={othersPreviousPage}/>}
    {othersPage == 3 && multiple == false && <One page={othersPage} next={othersNextpage} previous={othersPreviousPage}/>}
    {othersPage == 3 && multiple == true && < Multiple page={othersPage} next={othersNextpage} previous={othersPreviousPage}/>}
    {othersPage == 4 && <PropertyName page={othersPage} next={othersNextpage} previous={othersPreviousPage}/>}
    {othersPage == 5 && <PropertyDetails page={othersNextpage} next={othersNextpage} previous={othersPreviousPage}/>}
    {othersPage == 6 && <PropertyPermition page={othersPage} next={othersNextpage} previous={othersPreviousPage}/>}
    {othersPage == 7 && <PropertyPhotos page={othersPage} next={othersNextpage} previous={othersPreviousPage}/>}
    {othersPage == 8 && <PriceSystem page={othersPage} next={othersNextpage} previous={othersPreviousPage}/>}
    {othersPage == 9 && <SubmittingPropertyPage page={othersPage} next={othersNextpage} previous={othersPreviousPage}/>}

    </div>
      <div className="w-25%">
      <TricProgress page={othersPage}/>
      </div>
    </div>
  )
}

export default Others