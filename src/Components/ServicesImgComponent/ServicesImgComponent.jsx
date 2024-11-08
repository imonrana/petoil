import React from 'react'

const ServicesImgComponent = ({className, children}) => {
  return (
    <div className = {` relative z-[1] py-[100px] md:pt-[147px]  md:pb-[139px] lg:py-[100px] xl:pt-[147px] xl:pb-[139px] w-1/2 after:bg-[rgba(0,0,0,0.6)] after:absolute after:content-[" "] after:top-0 after:left-0 after:h-full after:w-full after:z-[-1] ${className}`}>
        {children}
    </div>
  )
}

export default ServicesImgComponent