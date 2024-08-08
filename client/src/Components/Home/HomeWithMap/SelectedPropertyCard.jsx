import React from 'react'
import { img1, img2, img3 } from '../../Data/Images'
import SelectedPropertyImageSlider from '../../Slides/SelectedPropertyImageSlider'
import { Link, useParams } from 'react-router-dom'

function SelectedPropertyCard({property,images}) {
 //   const images = property.images
    const {propertyId} = useParams()
    console.log({imagesFomSelected:images})
    console.log({PropertyFromSelectedProperty:property})
  return (
          <div className='py- 5 px-4'>
        <h1 className=' font-serif '>The home you selected</h1>
        <div className='flex gap-3 rounded-md'>

            <div style={{width:'45%', height:'auto' , height:'200px' }}>
              <SelectedPropertyImageSlider slide={images}/>
            </div>
            <Link to={`/detail-of-property-open/${propertyId}`}>
            <div className="gap-2">
                <p>{property.category} from {property.city}</p>
                <p>{property.name}</p>
            </div> 
            </Link>
        </div>
    </div>
  )
}

export default SelectedPropertyCard