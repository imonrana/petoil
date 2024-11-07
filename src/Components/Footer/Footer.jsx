import React from "react";
import Container from "../Container/Container";
import footerLogo from "../../assets/logo.png";
import cert1 from "../../assets/cert1.png"
import cert2 from "../../assets/cert2.png"

import { IoMailUnreadOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F]">
      <Container>
        <div className=" gap-y-10 pt-10 pb-10 md:gap-y-0 md:pt-[148px] md:pb-[170px] flex   md:justify-between  flex-col md:flex-row">
          <div className="mx-auto md:mx-0">
            <a href="#">
            <figure>
              <img src={footerLogo} alt="logo" />
            </figure>
            </a>
            {/* address start */}
            <div className="space-y-[15px] my-[34px] ">
              <div className="text-primaryText flex items-center gap-x-[5px]">
                <IoMailUnreadOutline className="text-xl" />
                <p>mail@yourcompany.com</p>
              </div>
              <div className="text-primaryText flex items-center gap-x-[5px]">
                <FaPhoneVolume className="text-xl" />
                <p>+896 120 5889 (Toll free)</p>
              </div>
              <div className="text-primaryText flex items-center gap-x-[5px]">
                <GrMapLocation className="text-xl" />
                <p>101 Baker Street, New York, USA, 12345</p>
              </div>
            </div>
            {/* address end */}

              {/* social media icon start */}
      <div className='text-primaryText flex gap-x-[19px]'>
      <div className="bg-primary rounded-full p-[10px]">
     <a href="#"> <FaFacebookF  className='text-[16px]'/></a>
      </div>
      <div className="bg-primary rounded-full p-[10px]">
      <a href="#"><FaTwitter  className='text-[16px]'/></a>
      </div>
      <div className="bg-primary rounded-full p-[10px]">
      <a href="#"><FaLinkedinIn  className='text-[16px]'/></a>
      </div>
      <div className="bg-primary rounded-full p-[10px]">
      <a href="#"><FaInstagram  className='text-[16px]'/></a>
      </div>
      </div>
      {/* social media icon end */}
          </div>

              {/* company part */}

         <div className="flex justify-center md:justify-normal gap-x-20 md:gap-x-[122px]">
         <div className="">
            <p className="font-poppins font-bold text-[16px] text-primaryText">Company</p>
            <ul className="font-poppins font-normal text-[14px] text-primaryText space-y-[15px] mt-[21px]">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Gallery</a>
                </li>
            </ul>
          </div>

          <div className="">
            <p className="font-poppins font-bold text-[16px] text-primaryText">Others</p>
            <ul className="font-poppins font-normal text-[14px] text-primaryText space-y-[15px] mt-[21px]">
                <li>
                    <a href="#">Blog</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#">Terms & Conditions</a>
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
            </ul>
          </div>
         </div>

          <div className="flex md:block items-center gap-x-5 md:gap-x-0 px-5 md:px-0 justify-center md:justify-normal">
          <p className="font-poppins font-bold text-[16px] text-primaryText ">Certificate</p>
       <div className="flex justify-center md:justify-normal gap-x-[5px] md:pt-[21px]">
       <figure>
            <img src={cert1} alt="cert1" />
          </figure>
          <figure>
            <img src={cert2} alt="cert2" />
          </figure>
       </div>
          </div>
        </div>
      </Container>
      <div className="bg-[#282828] py-[42px]">
        <Container>
            <p className="font-poppins font-medium text-xs md:text-base text-[#6C6C6C] px-5 md:px-0 text-center md:text-left">© Copyright 2022 by AltDesain Studio – All right reserved.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
