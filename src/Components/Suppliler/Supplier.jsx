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
      <Container>
      <div className="flex justify-between items-center font-poppins py-[78px]">
        <div className="font-bold text-5xl leading-[72px] w-[289px]">
            The biggest supplier on the country
            </div>
        <div className="font-medium text-base text-infoText w-[651px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution.
        </div>
      </div>
      </Container>
      {/* suplier heading text end */}

      {/* gallary img start */}

      <div className="flex gap-x-[30px]">
        <figure>
          <img src= {gallaryImgOne} alt="gallary_img_one" />
        </figure>
        <figure>
          <img src= {gallaryImgTwo} alt="gallary_img_two" />
        </figure>
        <figure>
          <img src= {gallaryImgThree} alt="gallary_img_three" />
        </figure>
        <figure>
          <img src= {gallaryImgFour} alt="gallary_img_four" />
        </figure>
      </div>

      {/* gallary img end */}
    </section>
  );
};


export default Supplier;
