import React from "react";
import ServicesImgComponent from "../ServicesImgComponent/ServicesImgComponent";
import Button from "../Button/Button"
import Container from "../Container/Container";


const Survices = () => {
  return (
    <section className="mt-7">
      <div className="flex flex-wrap justify-between w-full">
      {/* our services text start */}
 
   <Container className="self-center">
   <div className=" font-poppins  w-1/2 ">
        <h4 className="font-bold text-[64px] text-secondaryText w-[421px] ">
            Our Services
            </h4>
        <p className="font-medium text-base text-infoText w-[405px]">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
        </p>
      </div>
   </Container>

      {/* our services text end */}
      {/* services img start */}
      <ServicesImgComponent className=' bg-servicesImgOne bg-no-repeat bg-center bg-cover shrink w-1/2'>
       <div className="ml-[116px]  ">
       <h5 className=" mb-[19px] font-poppins font-bold text-[28px] text-primaryText ">Modern natural oil and gas refineries.</h5>
       <Button className="border-transparent transform duration-[0.4s] ease-in-out hover:scale-110 hover:text-secondaryText ">
        <a href="#">Learn More</a>
       </Button>
       </div>
      </ServicesImgComponent>
      <ServicesImgComponent className=' bg-servicesImgTwo bg-no-repeat bg-center bg-cover shrink w-1/2'>
      <div className="ml-[116px] ">
       <h5 className="mb-[19px] font-poppins font-bold text-[28px] text-primaryText ">Supply of national industries.</h5>
       <Button className="border-transparent transform duration-[0.4s] ease-in-out hover:scale-110 hover:text-secondaryText ">
        <a href="#">Learn More</a>
       </Button>
       </div>
      </ServicesImgComponent>
      <ServicesImgComponent className=' bg-servicesImgThree bg-no-repeat bg-center bg-cover shrink w-1/2'>
      <div className="ml-[116px] ">
       <h5 className=" mb-[19px] font-poppins font-bold text-[28px] text-primaryText ">National fuel distribution and supply.</h5>
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
