import React from 'react'
import  aboutCompanyImg from "../../assets/about_company.png"
import Container from '../Container/Container'
import Button from '../Button/Button'



function AboutCompany() {
  return (
    <section className='bg-[#F0F0F0] py-[50px] md:py-[136px]'>
       <Container>
       <div className='flex flex-col gap-y-2 md:gap-y-0 md:flex-row '>
            <div className='py-5 md:py-[100px] pl-5 md:pl-[74px] md:pr-[77px]  bg-primary' >
            <p className='font-poppins font-bold text-2xl md:text-[36px] text-primaryText md:w-[262px] '>Learn more about our company</p>
            </div>
            <figure className='relative'>
                <img src={aboutCompanyImg} alt="about_company_img"/>
                <Button className= "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-all duration-700"  >
                <a href="#"> Learn More</a>
                </Button>
            </figure>
        </div>
       </Container>
    </section>
  )
}

export default AboutCompany