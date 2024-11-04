import React from 'react'
import Button from '../Button/Button'
import Container from '../Container/Container'

const Map = () => {
  return (
   <section>
    <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116869.45252691708!2d90.2383846433594!3d23.741302499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1730747711817!5m2!1sen!2sbd"
    className='w-full h-[450px] border-0'
    ></iframe>
    </div>
    <div className=' bg-primary py-[47px] border-[#FFB800] border-b-[5px]'>
        <Container>
     <div  className=' flex justify-between items-center'>
     <h4 className='font-poppins font-bold text-[36px] text-primaryText '>
        Want to join as member branch in your area?
        </h4>
        <Button className="py-[14px] px-[32px] hover:text-secondaryText transition-all duration-700">  
            <a href="#">Contact</a>
        </Button>
     </div>
        </Container>
    </div>
   </section>
  )
}

export default Map