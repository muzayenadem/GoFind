import React from 'react'
import { useSelector } from 'react-redux';
import { hotelSubCategories } from '../Categories';
import PlaceCategory from '../Common/PlaceCategory';
import MultipleOrOne from '../Common/MultipleOrOne';
import One from '../Common/One';
import Multiple from '../Common/Multiple';
import PropertyName from '../Common/CreateProperty/PropertyName';
import { hotelsNextpage,hotelsPreviousPage } from '../../../../../controller/AddProperty/NextPrev';
function Hotels() {
  const hotelsPage = useSelector(state => state.NextPrev.hotelsPage)
  const property = useSelector(state => state.propertyType.type)
  const multiple = useSelector(state => state.propertyType.multiple)
  console.log({property})
  const propertyType = useSelector(state => state.propertyType)
  console.log({hotelsPage})
  console.log({propertyType})
  return (
    <>
    {hotelsPage == 0 && <PlaceCategory page={hotelsPage} subCategories={hotelSubCategories}  next={hotelsNextpage} previous={hotelsPreviousPage}/>}
    {hotelsPage == 1 && <MultipleOrOne page={hotelsPage} next={hotelsNextpage} previous={hotelsPreviousPage}/>}
    {hotelsPage == 2 && multiple == false && <One page={hotelsPage} next={hotelsNextpage} previous={hotelsPreviousPage}/>}
    {hotelsPage == 2 && multiple == true && < Multiple page={hotelsPage} next={hotelsNextpage} previous={hotelsPreviousPage}/>}
    {hotelsPage == 3 && <PropertyName page={hotelsPage} next={hotelsNextpage} previous={hotelsPreviousPage}/>}
    </>
  )
}

export default Hotels