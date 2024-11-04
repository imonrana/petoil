import React from 'react'
import  aboutCompanyImg from "../../assets/about_company.png"
import Container from '../Container/Container'



function AboutCompany() {
  return (
    <section className='bg-[#F0F0F0] py-[136px]'>
       <Container>
       <div className='flex '>
            <div className='py-[100px] pl-[74px] pr-[77px] bg-primary' >
            <p className='font-poppins font-bold text-[36px] text-primaryText w-[262px] '>Learn more about our company</p>
            </div>
            <figure>
                <img src={aboutCompanyImg} alt="about_company_img"/>
            </figure>
        </div>
       </Container>
    </section>
  )
}

export default AboutCompany