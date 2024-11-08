import React from "react";


import Container from "../Container/Container";

// gallary image import
import gallaryImgOne from "../../assets/galary_img_one.png";
import gallaryImgTwo from "../../assets/gallary_img_two.png"
import gallaryImgThree from "../../assets/gallary_img_three.png"
import gallaryImgFour from "../../assets/gallary_img_four.png"


const Supplier = () => {
  return (
    <section>
      {/* Suplier heading text */}
      <Container className= "lg:mx-5 xl:mx-auto">
      <div className="md:flex justify-between items-center font-poppins py-12 px-5 lg:px-0 lg:py-[78px]">
        <div className="font-bold text-2xl lg:text-5xl leading-7 lg:leading-[60px] xl:leading-[72px] lg:w-[289px] pb-4 lg:pb-0">
            The biggest supplier on the country
            </div>
        <div className="font-medium text-sm lg:text-base text-infoText md:w-[500px] lg:w-[550px] xl:w-[651px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution.
        </div>
      </div>
      </Container>
      {/* suplier heading text end */}

      {/* gallary img start */}

      <div className="flex flex-col md:justify-normal md:flex-row gap-y-5 md:pb-5 lg:gap-y-0 md:gap-x-[30px]">
        <figure className="w-[70%] mx-auto md:w-full">
          <img src= {gallaryImgOne} alt="gallary_img_one" />
        </figure>
        <figure  className="w-[70%]  mx-auto md:w-full">
          <img src= {gallaryImgTwo} alt="gallary_img_two" />
        </figure>
        <figure className="w-[70%] mx-auto md:w-full">
          <img src= {gallaryImgThree} alt="gallary_img_three" />
        </figure>
        <figure className="w-[70%] mx-auto md:w-full">
          <img src= {gallaryImgFour} alt="gallary_img_four" />
        </figure>
      </div>

      {/* gallary img end */}
    </section>
  );
};


export default Supplier;
