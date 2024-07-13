import React from 'react'
import { FaAppStore, FaApple, FaCopyright, FaFacebook, FaGooglePlay, FaInstagram, FaLinkedin, FaPinterest, FaXTwitter, FaYoutube } from 'react-icons/fa6'

function Footer() {
  return (
    <div className=' w-full h-uto bg-neutral-100 flex flex-col'>
        <div className='container mx-auto py-10 px-5 md:px-10 lg:px-48 xl:px-52 gap-10 grid grid-cols-1 md:grid-cols-4 border-b-[1px] border-b-neutral-300'>
          <div className='flex flex-col gap-5'>
            <h2 className='font-bold text-neutral-600'>GoFind</h2>
            <ul className='flex flex-col gap-4'> 
                <li className='footerli'>About us</li>
                <li className='footerli'>Careers</li>
                <li className='footerli'>Inverters</li>
                <li className='footerli'>GoFind Stock</li>
                <li className='footerli'>App</li>
                <li className='footerli'>Project Feutures</li>
                <li className='footerli'>Insights</li>
                <li className='footerli'>Inspiration</li>
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <h2 className='font-bold text-neutral-600'>Contact</h2>
            <ul className='flex flex-col gap-4'> 
                <li className='footerli'>Help Center and contact</li>
                <li className='footerli'>List your home</li>
                <li className='footerli'>Become an affilate partner</li>
                <li className='footerli'>Press</li>
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <h2 className='font-bold text-neutral-600'>Legal policies</h2>
            <ul className='flex flex-col gap-4'> 
                <li className='footerli'>Terms of Service</li>
                <li className='footerli'>Privacy Police</li>
                <li className='footerli'>Legal</li>
                <li className='footerli'>How the platform works</li>
                <li className='footerli'>Security</li>
                <li className='footerli'>Content Guidelines</li>
            </ul>
          </div>
          <div className='flex flex-col gap-6'>
            <div>
            <h2 className='font-bold text-neutral-600 mb-5'>Contuct Us</h2>
            <div className='flex justify-center gap-3'>
            <span className='mediaIcon'><FaFacebook/></span>
            <span className='mediaIcon'><FaXTwitter/></span>
            <span className='mediaIcon'><FaLinkedin/></span>
            <span className='mediaIcon'><FaInstagram/></span>
            <span className='mediaIcon'><FaPinterest/></span>
            <span className='mediaIcon'><FaYoutube/></span>
            </div>
            </div>
            <div>
            <h2 className='font-bold text-neutral-600 mb-5'>Download our app</h2>
            <div className='flex flex-col justify-start gap-6'>
                <div className=' bg-black h-12 justify-start items-start flex gap-2 rounded-md '>
                  <span className='appsIcon'><FaGooglePlay/></span>
                 <div className='p-1'>
                    <p className='text-[10px] text-neutral-100'>GET IT ON</p>
                    <h2 className='text-md font-bold text-white'>GooglePlay</h2>
                  </div>
                </div>
                <div className=' bg-black h-12 justify-start items-start flex gap-2 rounded-md '>
                  <span className='appsIcon'><FaAppStore/></span>
                 <div className='p-1'>
                    <p className='text-[10px] text-neutral-100'>Download on the</p>
                    <h2 className='text-md font-bold text-white'>App Store</h2>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
        <div className='text-center p-5 text-neutral-700 flex justify-center items-center'>
        <div className=' flex justify-start gap-2'>
        <span className='mt-1 text-neutral-700'> <FaCopyright/></span>    
        <p>2024 All Rights reserved by GoFind Company</p>
        </div>
        </div>
    </div>
  )
}

export default Footer