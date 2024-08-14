import React, { useEffect, useState } from 'react'
import { img1, samp1,samp2,img2,img3 } from '../Data/Images'
import { GoDotFill } from "react-icons/go";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import findIp from '../Data/findIp';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { mainLink } from '../../controller/commonLink/mainLInk';
import { useParams } from 'react-router-dom';
function SelectedPropertyImageSlider({images}) {
  const [currentIndex , setCurrentIdex] = useState(0)
  const [active,setActive] = useState(0)
  const [hide, setHide] = useState(true)

  const next = () =>{
    const isLastIndex = currentIndex === images.length - 1
    const newIndex = isLastIndex ? 0 : currentIndex + 1
    setCurrentIdex(newIndex)
    setActive(newIndex)
  }
  const previous = () =>{
    const isCurrentIndex = currentIndex === 0
    const newIndex = isCurrentIndex ? images.length - 1 : currentIndex - 1
    setCurrentIdex(newIndex)
    setActive(newIndex)
  }
  const onSlide = (i) =>{
    setCurrentIdex(i)
    setActive(i)
  }
  return (
    <div style={{height:'100%', position:'relative',}} onMouseOver={()=> setHide(false)} onMouseLeave={()=> setHide(true)}>
      <div onClick={previous} className={`w-8 h-8 rounded-3xl bg-white/80 hover:bg-black/50 text-center hover:text-white/80 flex items-center justify-center ${hide == true ? 'hidden' : ''}`} style={{position:'absolute',top:'50%',transform:'translate(0,-50%',left:'18px',fontSize:'18px',cursor:'pointer'}} ><FaChevronLeft/></div>
      <div onClick={previous} className={`w-8 h-8 rounded-3xl bg-white/80 hover:bg-black/50 text-center hover:text-white/80 flex items-center justify-center ${hide == true ? 'hidden' : ''}`} style={{position:'absolute',top:'50%',transform:'translate(0,-50%',right:'18px',fontSize:'18px',cursor:'pointer'}} ><FaChevronRight/></div>
      {/* <div style={{backgroundImage:`url(${slide[currentIndex]})`,width:"100%",height:'100%',borderRadius:'10px',backgroundPosition:'center',backgroundSize:'cover'}}>
      </div> */}
      <img src={images[currentIndex]} style={{width:'100%', height:'100%', borderRadius:'12px'}}/>
      <div className="flex justify-center items-center gap-6 absolute bottom-8 center">
        { images.length >1 &&
        (
          images.map((slide,i) =>{
            return(
              <button onClick={() =>onSlide(i)} key={i} className={`font-bold bg-auto ${i === active ? 'text-neutral-700 text-3xl':'text-neutral-300 text-xl'}`}>
                <span className='rounded-full'><GoDotFill/></span>
              </button>
            )
          }))
        }
      </div>
    </div>
  )
}

export default SelectedPropertyImageSlider