import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { img1,img2,img3 } from '../Data/Images';
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";
import Pagination from './Pagination';
import { fetchHomes } from '../../controller/data/HomeSlice/homeSlice';
import { useSelector,useDispatch } from 'react-redux';
function RentalHousesCard() {
     const [homeData, setHomeData] = useState([])
     const [dotActive, setDotActive] = useState()
     const dispatch = useDispatch()
     useEffect(()=>{
      dispatch(fetchHomes('default'))
     },[])
     const houses = useSelector((state)=> state.homesReducer.homes)
     const searchedHome = useSelector(state => state.searchedHomeReducer.searched)
     let homes = []
     searchedHome.length != 0 ? homes = searchedHome : homes =  houses

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
         beforeChange: (prev,next) =>{
          setDotActive(next)
        },
         appendDots: dots => (
       <div
            style={{
              borderRadius: "10px",
              padding: "10px",
              position:"absolute",
              bottom:"10%",
              left:"35%"
            }}
          >
            <ul style={{
              display:"flex",
              marginTop:"20px",
              gap:"15px",
              justifyContent:"center"
             }}> {dots} </ul>
          </div>
    ),
    customPaging: i => (
      <div
            style={
              dotActive == i ? {
                width: "12px",
                height:"12px",
                cursor:"pointer",
                color: "blue",
                background:"#ff014f",
                borderRadius:"50%",
                border: "1px blue solid"
              } : {
                width: "12px",
                height:"12px",
                cursor:"pointer",
                color: "blue",
                background:"gray",
                borderRadius:"50%",
                border: "1px blue solid"
              }
            }
          >
          </div>
    )
      };

      function SampleNextArrow(props) {
        const { onClick } = props;
        return (
          <div
         
           className='w-14 h-12  rounded-full bg-neutral-400 text-2xl flex justify-center absolute top-[30%] -left-9  cursor-pointer'
            onClick={onClick}
          >
            <span className='ml-[55%] mt-[25%] text-2xl text-black font-bold'><FaAngleLeft/></span>
          </div>
        );
      }

      function SamplePrevArrow(props) {
        const {  onClick } = props;
        return (
         <div
         
           className='w-14 h-12  rounded-full bg-neutral-400 text-2xl flex justify-center absolute top-[30%] -right-9   cursor-pointer'
            onClick={onClick}
          >
            <span className='mr-[55%] mt-[25%] text-2xl text-black font-bold'><FaAngleRight/></span>
          </div>
        );
      }
      
  return (
    <>
    {
      
        <div className='container mx-auto py-20'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
    {
        homes.map(({title,des,price},i) => {
            return (
                <div key={i} className='w-full h-auto mt-2 bg-white shadow-lg   shadow-neutral-300'>
                  <Slider {...settings} className=' overflow-hidden '>
                          <div>
                      <img src={img1} className='w-full object-cover '></img>
                      </div>
                       <div>
                        <img src={img2} className='w-full '></img>
                         </div>
                         <div>
                          <img src={img3} className='w-full'></img>
                          </div>
                  </Slider>
                          <div className='flex flex-col gap-1 p-5'>
                            <h2 className=' text-neutral-400 font-medium text-xl'>{price}$</h2>
                            <h2 className=' text-neutral-400 font-medium text-xl'>2 bed, 3ba {price}$</h2>
                            <h2 className=' text-neutral-400 font-medium text-xl'>{des}</h2>
                          </div>
                          <div className='flex justify-between p-5'>
                            <div className='w-[48%] bg-purple-400 px-4 items-center py-2'>
                             <p className='text-white font-bold text-lg text-center'>Email Property</p>
                            </div>
                              <div className='w-[48%] bg-neutral-400 px-4 items-center py-2'>
                             <p className='text-white font-bold text-lg text-center'>Detail</p>
                            </div>
                          </div>
                </div>
            )
        })
    }
    <div>
    </div>
    <Pagination/>
    </div>
    </div>
}
    </>
  )
}

export default RentalHousesCard
