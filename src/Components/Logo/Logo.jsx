import React from 'react'
import logoOne from "../../assets/logo1.png"
import logoTwo from "../../assets/logo2.png"
import logoThree from "../../assets/logo3.png"
import logoFour from "../../assets/logo4.png"
import Container from '../Container/Container'


const Logo = () => {
  return (
    <section className='py-[20px] md:py-[116px]'>
     <Container>
     <div className='flex justify-between'>
       <figure>
            <img src={logoOne} alt="logo1" />
        </figure>
        <figure>
            <img src={logoTwo} alt="logo2" />
        </figure>
        <figure>
            <img src={logoThree} alt="logo3" />
        </figure>
        <figure>
            <img src={logoThree} alt="logo4" />
        </figure>
       </div>
     </Container>
    </section>
  )
}

export default Logo