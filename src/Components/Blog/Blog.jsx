import React from 'react'

import Button from '../Button/Button'
import Container from '../Container/Container'
import { FaAngleRight } from "react-icons/fa6";

const Blog = () => {
  return (
    <section className='bg-[#F0F0F0] py-12  md:py-0 md:pt-[110px] md:pb-[162px]'>
        <Container>
        <div className=' flex flex-col md:flex-row gap-y-5 md:gap-y-0 justify-between'>
        <div  className=' pl-7 md:pl-[46px] bg-BlogImgOne bg-no-repeat bg-cover bg-center md:w-[339px] relative z-[1] after:absolute after:content-[" "] after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.6)] after:h-full after:w-full after:z-[-1] pt-[75px] pb-[55px] '>
            <p className='font-poppins font-bold text-lg md:text-[24px] w-[249px] text-primaryText pb-5  md:pb-[52px]'> lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
            <Button className="border-transparent hover:bg-transparent hover:border-[rgba(255,255,255,0.5)] transition-all duration-700 py-[10px] px-[22px] bg-[rgb(255,255,255,0.5)]">
                <a href="#" className='font-poppins font-semibold text-[12px]'>Read more</a>
            </Button>
        </div>

        <div  className=' pl-7 md:pl-[46px] bg-BlogImgTwo bg-no-repeat bg-cover bg-center md:w-[339px] relative z-[1] after:absolute after:content-[" "] after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.6)] after:h-full after:w-full after:z-[-1] pt-[75px] pb-[55px] '>
            <p className='font-poppins font-bold text-lg md:text-[24px] w-[249px] text-primaryText pb-5  md:pb-[52px]'> lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
            <Button className="border-transparent hover:bg-transparent hover:border-[rgba(255,255,255,0.5)] transition-all duration-700 py-[10px] px-[22px] bg-[rgb(255,255,255,0.5)]">
                <a href="#" className='font-poppins font-semibold text-[12px]'>Read more</a>
            </Button>
        </div>

        <div  className=' pl-7 md:pl-[46px] bg-BlogImgThree bg-no-repeat bg-cover bg-center md:w-[339px] relative z-[1] after:absolute after:content-[" "] after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.6)] after:h-full after:w-full after:z-[-1] pt-[75px] pb-[55px] '>
            <p className='font-poppins font-bold text-lg md:text-[24px] w-[249px] text-primaryText  pb-5 md:pb-[52px]'> lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
            <Button className="  bg-[rgb(255,255,255,0.5)] border-transparent hover:bg-transparent hover:border-[rgba(255,255,255,0.5)] transition-all duration-700 py-[10px] px-[22px]">
                <a href="#" className='font-poppins font-semibold text-[12px]'>Read more</a>
            </Button>
        </div>
        </div>
        <p className=' font-poppins font-bold text-sm md:text-[16px] mt-5 md:mt-[29px] text-end'><a href="#">MORE FROM THE BLOG <FaAngleRight className='inline-block' /></a></p>
        </Container>
    </section>
  )
}

export default Blog