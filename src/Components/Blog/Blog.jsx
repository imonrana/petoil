import React from 'react'

import Button from '../Button/Button'
import Container from '../Container/Container'
import { FaAngleRight } from "react-icons/fa6";

const Blog = () => {
  return (
    <section className='bg-[#F0F0F0] py-12  md:py-0 md:pt-12 md:pb-16 lg:pt-[110px]  lg:pb-[162px]'>
        <Container className= "lg:mx-5 xl:mx-auto">
        <div className=' flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 justify-between'>
        <div  className=' bg-BlogImgOne pl-7 md:pl-[46px]  bg-no-repeat bg-cover bg-center lg:w-[310px] xl:w-[339px] relative z-[1] after:absolute after:content-[" "] after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.6)] after:h-full after:w-full after:z-[-1] pt-[75px] pb-[55px] '>
            <p className='font-poppins font-bold text-lg md:text-[24px]   w-80 md:w-96 md:leading-8 lg:w-[249px] text-primaryText pb-5  md:pb-8 lg:pb-[52px]'> lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
            <Button className="border-transparent hover:bg-transparent hover:border-[rgba(255,255,255,0.5)] transition-all duration-700 py-[10px] px-[22px] bg-[rgb(255,255,255,0.5)]">
                <a href="#" className='font-poppins font-semibold text-[12px]'>Read more</a>
            </Button>
        </div>

        <div  className=' pl-7 md:pl-[46px] bg-BlogImgTwo bg-no-repeat bg-cover bg-center  lg:w-[310px] xl:w-[339px]  relative z-[1] after:absolute after:content-[" "] after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.6)] after:h-full after:w-full after:z-[-1] pt-[75px] pb-[55px] '>
            <p className='font-poppins font-bold text-lg md:text-[24px]  w-80 md:w-96 md:leading-8 lg:w-[249px] text-primaryText pb-5  md:pb-8 lg:pb-[52px]'> lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
            <Button className="border-transparent hover:bg-transparent hover:border-[rgba(255,255,255,0.5)] transition-all duration-700 py-[10px] px-[22px] bg-[rgb(255,255,255,0.5)]">
                <a href="#" className='font-poppins font-semibold text-[12px]'>Read more</a>
            </Button>
        </div>

        <div  className=' pl-7 md:pl-[46px] bg-BlogImgThree bg-no-repeat bg-cover bg-center lg:w-[310px] xl:w-[339px]  relative z-[1] after:absolute after:content-[" "] after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.6)] after:h-full after:w-full after:z-[-1] pt-[75px] pb-[55px] '>
            <p className='font-poppins font-bold text-lg md:text-[24px] w-80 md:w-96 md:leading-8 lg:w-[249px] text-primaryText  pb-5 md:pb-8 lg:pb-[52px]'> lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
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