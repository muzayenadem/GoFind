import React from 'react'
import { useSelector } from 'react-redux';
import { hotelSubCategories } from '../Common/Categories';
import PlaceCategory from '../Common/PlaceCategory';
import MultipleOrOne from '../Common/MultipleOrOne';
import One from '../Common/One';
import Multiple from '../Common/Multiple';
import PropertyName from '../Common/CreateProperty/PropertyName';
import { hotelsNextpage,hotelsPreviousPage } from '../../../../../controller/AddProperty/NextPrev';
import TricProgress from '../Common/TricProgress';
import PropertyDetails from '../Common/CreateProperty/PropertyDetails';
import PropertyPermition from '../Common/CreateProperty/PropertyPermition';
import PropertyPhotos from '../Common/CreateProperty/PropertyPhotos';
import PriceSystem from '../Common/CreateProperty/PriceSystem';
import SubmittingPropertyPage from '../Common/CreateProperty/SubmittingPropertyPage';
function Hotels() {
  const hotelsPage = useSelector(state => state.NextPrev.hotelsPage)
  const property = useSelector(state => state.propertyType.type)
  const multiple = useSelector(state => state.propertyType.multiple)
  console.log({property})
  const propertyType = useSelector(state => state.propertyType)
  console.log({hotelsPage})
  console.log({propertyType})
  return (
    <div className='flex gap-2 justify-start flex-wrap-reverse md:flex-nowrap'>

    <div className='md:w-[90%] '>
    {hotelsPage == 0 && <PlaceCategory page={hotelsPage} subCategories={hotelSubCategories}  next={hotelsNextpage} previous={hotelsPreviousPage}/>}
    {hotelsPage == 1 && <MultipleOrOne page={hotelsPage} next={hotelsNextpage} previous={hotelsPreviousPage}/>}
    {hotelsPage == 2 && multiple == false && <One page={hotelsPage} next={hotelsNextpage} previous={hotelsPreviousPage}/>}
    {hotelsPage == 2 && multiple == true && < Multiple page={hotelsPage} next={hotelsNextpage} previous={hotelsPreviousPage}/>}
    {hotelsPage == 3 && <PropertyName page={hotelsPage} next={hotelsNextpage} previous={hotelsPreviousPage}/>}
    {hotelsPage == 4 && <PropertyDetails page={hotelsPage} next={hotelsNextpage} previous={hotelsPreviousPage}/>}
    {hotelsPage == 5 && <PropertyPermition page={hotelsPage} next={hotelsNextpage} previous={hotelsPreviousPage}/>}
    {hotelsPage == 6 && <PropertyPhotos page={hotelsPage} next={hotelsNextpage} previous={hotelsPreviousPage}/>}
    {hotelsPage== 7 && <PriceSystem page={hotelsPage} next={hotelsNextpage} previous={hotelsPreviousPage}/>}
    {hotelsPage == 8 && <SubmittingPropertyPage page={hotelsPage} next={hotelsNextpage} previous={hotelsPreviousPage}/>}
    </div>
      <div className="w-25%">
      <TricProgress page={hotelsPage}/>
      </div>
    </div>
  )
}

export default Hotels