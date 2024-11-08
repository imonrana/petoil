import React from "react";
import ServicesImgComponent from "../ServicesImgComponent/ServicesImgComponent";
import Button from "../Button/Button"
import Container from "../Container/Container";


const Survices = () => {
  return (
    <section className="mt-7">
      <div className="flex flex-wrap flex-col gap-y-5 lg:gap-y-0 lg:flex-row justify-start lg:justify-between w-full">
      {/* our services text start */}
 
   <Container className="lg:self-center mx-auto md:mx-4 lg:mx-auto">
   <div className=" font-poppins  md:w-1/2 md:mx-0  ">
        <h4 className="font-bold text-4xl md:text-[64px] text-secondaryText text-center md:text-left md:w-[421px]   mb-2 md:mb-5">
            Our Services
            </h4>
        <p className="font-medium text-sm md:text-base text-infoText w-[300px] md:w-[405px] mb-5 ml-4 lg:mb-0">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
        </p>
      </div>
   </Container>

      {/* our services text end */}
      {/* services img start */}
      <ServicesImgComponent className=' bg-servicesImgOne bg-no-repeat bg-center bg-cover shrink w-full lg:w-1/2'>
       <div className=" ml-[40px] xl:ml-[116px]  ">
       <h5 className=" mb-[14px] md:mb-[19px] font-poppins font-bold md:text-[28px] text-primaryText ">Modern natural oil and gas refineries.</h5>
       <Button className="border-transparent transform duration-[0.4s] ease-in-out hover:scale-110 hover:text-secondaryText ">
        <a href="#">Learn More</a>
       </Button>
       </div>
      </ServicesImgComponent>
      <ServicesImgComponent className=' bg-servicesImgTwo bg-no-repeat bg-center bg-cover shrink w-full lg:w-1/2'>
      <div className=" ml-[40px] xl:ml-[116px] ">
       <h5 className=" mb-[14px] md:mb-[19px] font-poppins font-bold md:text-[28px] text-primaryText ">Supply of national industries.</h5>
       <Button className="border-transparent transform duration-[0.4s] ease-in-out hover:scale-110 hover:text-secondaryText ">
        <a href="#">Learn More</a>
       </Button>
       </div>
      </ServicesImgComponent>
      <ServicesImgComponent className=' bg-servicesImgThree bg-no-repeat bg-center bg-cover shrink w-full lg:w-1/2'>
      <div className="ml-[40px] xl:ml-[116px]] ">
       <h5 className="mb-[14px] md:mb-[19px] font-poppins font-bold md:text-[28px] text-primaryText ">National fuel distribution and supply.</h5>
       <Button className="border-transparent transform duration-[0.4s] ease-in-out hover:scale-110 hover:text-secondaryText ">
        <a href="#">Learn More</a>
       </Button>
       </div>
      </ServicesImgComponent>
      {/* services img end */}
      </div>
    </section>
  );
};

export default Survices;
