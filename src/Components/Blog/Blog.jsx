import React from 'react'

import Button from '../Button/Button'
import Container from '../Container/Container'
import { FaAngleRight } from "react-icons/fa6";

const Blog = () => {
  return (
    <section className='bg-[#F0F0F0] pt-[110px] pb-[162px]'>
        <Container>
        <div className='flex justify-between'>
        <div  className='pl-[46px] bg-BlogImgOne bg-no-repeat bg-cover bg-center w-[339px] relative z-[1] after:absolute after:content-[" "] after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.6)] after:h-full after:w-full after:z-[-1] pt-[75px] pb-[55px] '>
            <p className='font-poppins font-bold text-[24px] w-[249px] text-primaryText pb-[52px]'> lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
            <Button className="border-transparent hover:bg-transparent hover:border-[rgba(255,255,255,0.5)] transition-all duration-700 py-[10px] px-[22px] bg-[rgb(255,255,255,0.5)]">
                <a href="#" className='font-poppins font-semibold text-[12px]'>Read more</a>
            </Button>
        </div>

        <div  className='pl-[46px] bg-BlogImgTwo bg-no-repeat bg-cover bg-center w-[339px] relative z-[1] after:absolute after:content-[" "] after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.6)] after:h-full after:w-full after:z-[-1] pt-[75px] pb-[55px] '>
            <p className='font-poppins font-bold text-[24px] w-[249px] text-primaryText pb-[52px]'> lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
            <Button className="border-transparent hover:bg-transparent hover:border-[rgba(255,255,255,0.5)] transition-all duration-700 py-[10px] px-[22px] bg-[rgb(255,255,255,0.5)]">
                <a href="#" className='font-poppins font-semibold text-[12px]'>Read more</a>
            </Button>
        </div>

        <div  className='pl-[46px] bg-BlogImgThree bg-no-repeat bg-cover bg-center w-[339px] relative z-[1] after:absolute after:content-[" "] after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.6)] after:h-full after:w-full after:z-[-1] pt-[75px] pb-[55px] '>
            <p className='font-poppins font-bold text-[24px] w-[249px] text-primaryText pb-[52px]'> lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
            <Button className="  bg-[rgb(255,255,255,0.5)] border-transparent hover:bg-transparent hover:border-[rgba(255,255,255,0.5)] transition-all duration-700 py-[10px] px-[22px]">
                <a href="#" className='font-poppins font-semibold text-[12px]'>Read more</a>
            </Button>
        </div>
        </div>
        <p className=' font-poppins font-bold text-[16px] mt-[29px] text-end'><a href="#">MORE FROM THE BLLOG <FaAngleRight className='inline-block' /></a></p>
        </Container>
    </section>
  )
}

export default Blog