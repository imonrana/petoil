import React from 'react'
import Container from '../Container/Container';
// react icon import
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram } from "react-icons/fa";



const Header = () => {
  return (
    <>
    {/* header ‍section start */}
    <header className='bg-secondary py-2 md:py-4 border-b-4 border-[#FFB800]'>
      <Container>
      {/* header wrapper start */}
     <div className=' space-y-1 md:space-y-0 md:flex justify-between items-center '>

        {/* contact information start */}
     <div className=' space-y-1 md:space-y-0  md:flex gap-x-[49px] items-center relative after:contents(" ") after:absolute after:top-1/2 after:left-1/2 md:after:h-4 after:bg-[#5C6A92] after:w-0.5 after:-translate-x-1/2  after:-translate-y-1/2  '>
     <div className='text-primaryText flex items-center gap-x-[5px]'>
      <IoMailUnreadOutline className='text-base md:text-xl'/>
        <p>mail@yourcompany.com</p>
      </div>
      <div className='text-primaryText flex items-center gap-x-[5px]'> 
      <FaPhoneVolume className='text-base md:text-xl'/>
        <p>+896 120 5889 (Toll free)</p>
      </div>
      </div>
      {/* contact information end */}

      {/* social media icon start */}
      <div className='text-primaryText flex gap-x-[14px] md:gap-x-[19px]'>
      <FaFacebookF  className='w-4'/>
      <FaTwitter className='w-4'/>
      <FaLinkedinIn className='w-4'/>
      <FaInstagram className='w-4'/>
      </div>
      {/* social media icon end */}

     </div>
     {/* header warpper end */}

      </Container>
    </header>
    {/* header section end */}
    </>
  )
}

export default Header