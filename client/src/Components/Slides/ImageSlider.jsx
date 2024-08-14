import React, { useEffect, useState } from 'react'
import { img1, samp1,samp2,img2,img3 } from '../Data/Images'
import { GoDotFill } from "react-icons/go";
import { FaChevronLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import findIp from '../Data/findIp';
function ImageSlider({slide}) {
  const [currentIndex , setCurrentIdex] = useState(0)
  const [active,setActive] = useState(0)
  const [like,setLIke] = useState(false)
  const [hide, setHide] = useState(true)
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
  const likeHandler = ()  =>{
    setLIke(!like)
  }
  const samp = [img1,img2,img3,samp1,samp2]
  return (
    <div style={{height:'100%', position:'relative',}} onMouseOver={()=> setHide(false)} onMouseLeave={()=> setHide(true)}>
      <div onClick={likeHandler} className={`w-10 h-10 text-center flex items-center justify-center ${like ? 'rounded-3xl bg-red-500 text-center flex':'hover:rounded-3xl hover:bg-black/50'}`} style={{position:'absolute',top:'10%',transform:'translate(0,-50%',right:'5%',fontSize:'25px',color:'#fff',cursor:'pointer'}}><FaRegHeart/></div>
      <div onClick={previous} className={`w-10 h-10 hover:rounded-3xl hover:bg-black/50 text-center flex items-center justify-center ${hide == true ? 'hidden' : ''}`} style={{position:'absolute',top:'50%',transform:'translate(0,-50%',left:'18px',fontSize:'25px',color:'#fff',cursor:'pointer'}}><FaChevronLeft/></div>
      <div onClick={next} className={`w-10 h-10 hover:rounded-3xl hover:bg-black/50 text-center flex items-center justify-center ${hide == true ? 'hidden' : ''}`} style={{position:'absolute',top:'50%',transform:'translate(0,-50%',right:'18px',fontSize:'25px',color:'#fff',cursor:'pointer'}}><FaChevronRight/></div>
      {/* <div style={{backgroundImage:`url(${slide[currentIndex]})`,width:"100%",height:'100%',borderRadius:'10px',backgroundPosition:'center',backgroundSize:'cover'}}>
      </div> */}
      <img src={slide[currentIndex]} style={{width:'100%', height:'100%', borderRadius:'12px'}}/>
      <div className="flex justify-center items-center gap-6 absolute bottom-8  left-[30%]">
        { slide.length >1 &&
        (
          slide.map((slide,i) =>{
            return(
              <button onClick={() =>onSlide(i)} key={i} className={`font-bold bg-auto ${i === active ? 'text-red-500 text-3xl':'text-neutral-300 text-xl'}`}>
                <span className='rounded-full'><GoDotFill/></span>
              </button>
            )
          }))
        }
      </div>
    </div>
  )
}

export default ImageSlider
