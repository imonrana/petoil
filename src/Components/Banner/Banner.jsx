import React from 'react'
import Container from '../Container/Container'
import Button from '../Button/Button'

const Banner = () => {
  return (
    // <div className="bg-banner bg-no-repeat bg-cover bg-center py-[258px] relative after:absolute after:content-[''] after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.6)] after:h-full after:w-full after:z-[0]">
    //   <Container className=' z-10 '>
    //    <h1 className=' z-20 font-poppins font-semibold text-[64px] text-primaryText pb-[30px] w-[842px]'>We exist since 1975 on the oil and gas industry.</h1>
    //    <Button className="border-primary hover:bg-transparent transition duration-500 hover:text-primaryText" >
    //     <a href="#learnMore">Learn More</a>
    //    </Button >
    //    </Container>
    // </div>

    <div className="bg-banner bg-no-repeat bg-cover bg-center">
     <div className='  bg-[rgba(0,0,0,0.6)] w-full h-full py-[258px]'>
     <Container>
       <h1 className='font-poppins font-semibold text-[64px] text-primaryText pb-[30px] w-[842px]'>We exist since 1975 on the oil and gas industry.</h1>
       <Button className="border-primary hover:bg-transparent transition duration-500 hover:text-primaryText" >
        <a href="#learnMore">Learn More</a>
       </Button >
       </Container>
     </div>
    </div>
  )
}

export default Banner