import React, { useEffect, useState } from 'react'
import { img1, samp1,samp2,img2,img3 } from '../Data/Images'
import { GoDotFill } from "react-icons/go";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import findIp from '../Data/findIp';
function ImageSlider({slide}) {
  const [currentIndex , setCurrentIdex] = useState(0)
  const [active,setActive] = useState(0)
  const next = () =>{
    const isLastIndex = currentIndex === slide.length - 1
    const newIndex = isLastIndex ? 0 : currentIndex + 1
    setCurrentIdex(newIndex)
    setActive(newIndex)
  }
  const previous = () =>{
    const isCurrentIndex = currentIndex === 0
    const newIndex = isCurrentIndex ? slide.length - 1 : currentIndex - 1
    setCurrentIdex(newIndex)
    setActive(newIndex)
  }
  const onSlide = (i) =>{
    setCurrentIdex(i)
    setActive(i)
  }
  const samp = [img1,img2,img3,samp1,samp2]
  return (
    <div style={{height:'100%', position:'relative',}}>
      <div onClick={previous} style={{position:'absolute',top:'50%',transform:'translate(0,-50%',left:'18px',fontSize:'25px',color:'#fff',cursor:'pointer'}}><FaChevronLeft/></div>
      <div onClick={next} style={{position:'absolute',top:'50%',transform:'translate(0,-50%',right:'18px',fontSize:'25px',color:'#fff',cursor:'pointer'}}><FaChevronRight/></div>
      {/* <div style={{backgroundImage:`url(${slide[currentIndex]})`,width:"100%",height:'100%',borderRadius:'10px',backgroundPosition:'center',backgroundSize:'cover'}}>
      </div> */}
      <img src={slide[currentIndex]} style={{width:'100%', height:'100%', borderRadius:'12px'}}/>
      <div className="flex justify-center items-center gap-6 absolute bottom-8  left-[30%]">
        { slide.length >1 &&
        (
          slide.map((slide,i) =>{
            return(
              <button onClick={() =>onSlide(i)} key={i} className={`font-bold  ${i === active ? 'text-fuchsia-500 text-3xl':'text-neutral-300 text-xl'}`}>
                <GoDotFill/>
              </button>
            )
          }))
        }
      </div>
    </div>
  )
}

export default ImageSlider
