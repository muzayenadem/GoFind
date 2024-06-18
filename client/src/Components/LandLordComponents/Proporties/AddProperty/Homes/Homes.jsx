import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import MultipleOrOne from '../Common/MultipleOrOne'
import Multiple from '../Common/Multiple'
import One from '../Common/One'
import Map1 from '../Common/Map1'
import PropertyName from '../Common/CreateProperty/PropertyName'
import { EntiresubCategories, PrivatesubCategories } from '../Categories'
import PlaceCategory from '../Common/PlaceCategory'
import QuantityOfPropertyAndPlace from '../Common/QuantityOfPropertyAndPlace'
import MultipleOrPrivatePage from '../Common/MultipleOrPrivatePage'
import { homeNextpage,homePreviousPage } from '../../../../../controller/AddProperty/NextPrev'
import Map2 from '../Common/Map2'
import Map3 from '../Common/Maps/Map3'
import PropertyListingLocation from '../Common/PropertyListingLocation'
import PropertyDetails from '../Common/CreateProperty/PropertyDetails'
import PropertyPermition from '../Common/CreateProperty/PropertyPermition'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import TricProgress from './TricProgress'
import PropertyPhotos from '../Common/CreateProperty/PropertyPhotos'

function Homes() {
  const homePage = useSelector(state => state.NextPrev.homePage)
  const property = useSelector(state => state.propertyType.type)
  const multiple = useSelector(state => state.propertyType.multiple)
  console.log({property})
  const propertyType = useSelector(state => state.propertyType)
  console.log({homePage})
  console.log({propertyType})
  return (
    <div className='flex gap-2 justify-start flex-wrap-reverse md:flex-nowrap'>

      <div className='md:w-[90%] '>
      {homePage == 0 && <MultipleOrPrivatePage page={homePage} next={homeNextpage} previous={homePreviousPage}/>}
    {homePage == 1 && propertyType.type == 'Entire place' && <PlaceCategory page={homePage} subCategories={EntiresubCategories} next={homeNextpage} previous={homePreviousPage}/>}
    {homePage == 1 && propertyType.type == 'A private room' &&  <PlaceCategory page={homePage} subCategories={PrivatesubCategories} next={homeNextpage} previous={homePreviousPage}/>}
    {homePage == 2 && propertyType.type == 'Entire place' && <QuantityOfPropertyAndPlace page={homePage} next={homeNextpage} previous={homePreviousPage}/>}
    {homePage == 2 && propertyType.type == 'A private room' && <MultipleOrOne page={homePage} next={homeNextpage} previous={homePreviousPage}/>}
    {homePage == 3 && multiple == false && <One page={homePage} next={homeNextpage} previous={homePreviousPage}/>}
    {homePage == 3 && multiple == true && < Multiple page={homePage} next={homeNextpage} previous={homePreviousPage}/>}
    {homePage == 4 && <PropertyName page={homePage} next={homeNextpage} previous={homePreviousPage}/>}
    {homePage == 5 && <PropertyDetails page={homePage} next={homeNextpage} previous={homePreviousPage}/>}
    {homePage == 6 && <PropertyPermition page={homePage} next={homeNextpage} previous={homePreviousPage}/>}
    {homePage == 7 && <PropertyPhotos page={homePage} next={homeNextpage} previous={homePreviousPage}/>}
    {homePage == 8 && <PropertyDetails page={homePage} next={homeNextpage} previous={homePreviousPage}/>}
    {homePage == 9 && <PropertyDetails page={homePage} next={homeNextpage} previous={homePreviousPage}/>}
      </div>
      <div className="w-25%">
      <TricProgress page={homePage}/>
      </div>
    </div>
  )
}

export default Homes

const educational=[
  {title:'programming',subtitle:'from ethiopia',result:89, des:'at anyway i am muzayen adem from ethiopia'},
  {title:'programming',subtitle:'from ethiopia',result:89, des:'at anyway i am muzayen adem from ethiopia'},
  {title:'programming',subtitle:'from ethiopia',result:89, des:'at anyway i am muzayen adem from ethiopia'},
  {title:'programming',subtitle:'from ethiopia',result:89, des:'at anyway i am muzayen adem from ethiopia'},
  {title:'programming',subtitle:'from ethiopia',result:89, des:'at anyway i am muzayen adem from ethiopia'},
  {title:'programming',subtitle:'from ethiopia',result:89, des:'at anyway i am muzayen adem from ethiopia'},
]