import React from 'react'
import { bg4, img1, img2, img3, samp1, samp2 } from '../Data/Images'
import ImageSlider from './ImageSlider'
const data=[
   {url:bg4},{url:img1},{url:img2},{url:img3},{url:samp1},{url:samp2}
]
function Crousel() {
  return (
    <div>
        <h1>From Gofind Campony</h1>
        <div style={{width:'500px', height:'280px',margin:'0 auto'}}>
        <ImageSlider slide={data}/>
        </div>
    </div>
  )
}

export default Crousel