import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import PropertyName from '../Common/CreateProperty/PropertyName'
import {othersCategory } from '../Categories'
import PlaceCategory from '../Common/PlaceCategory'
import MultipleOrOne from '../Common/MultipleOrOne'
import One from '../Common/One'
import Multiple from '../Common/Multiple'
import QuantityOfPropertyAndPlace from '../Common/QuantityOfPropertyAndPlace'
import MultipleOrPrivatePage from '../Common/MultipleOrPrivatePage'
import { othersNextpage,othersPreviousPage } from '../../../../../controller/AddProperty/NextPrev'

function Others() {
  const othersPage = useSelector(state => state.NextPrev.othersPage)
  const property = useSelector(state => state.propertyType.type)
  const multiple = useSelector(state => state.propertyType.multiple)
  console.log({property})
  const propertyType = useSelector(state => state.propertyType)
  console.log({othersPage})
  console.log({propertyType})
  return (
    <>
    {othersPage == 0 && <MultipleOrPrivatePage page={othersPage} next={othersNextpage} previous={othersPreviousPage}/>}
    {othersPage == 1 && <PlaceCategory page={othersPage} subCategories={othersCategory} next={othersNextpage} previous={othersPreviousPage}/>}
    {othersPage == 2 && propertyType.type == 'Entire place' && <QuantityOfPropertyAndPlace page={othersPage} next={othersNextpage} previous={othersPreviousPage}/>}
    {othersPage == 2 && propertyType.type == 'A private room' && <MultipleOrOne page={othersPage} next={othersNextpage} previous={othersPreviousPage}/>}
    {othersPage == 3 && multiple == false && <One page={othersPage} next={othersNextpage} previous={othersPreviousPage}/>}
    {othersPage == 3 && multiple == true && < Multiple page={othersPage} next={othersNextpage} previous={othersPreviousPage}/>}
    {othersPage == 4 && <PropertyName page={othersPage} next={othersNextpage} previous={othersPreviousPage}/>}
    {othersPage == 5 && <h1>Page 5</h1>}

 
    </>
  )
}

export default Others