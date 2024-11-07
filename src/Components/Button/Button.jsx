import React from 'react'

const Button = ({className, children}) => {
  return (
    <>
    <button className={` ${className} py-[10px] px-[15px] md:py-[14px] md:px-[30px] border-2 bg-primary text-primaryText font-poppins font-semibold text-[14px] md:text-base transition duration-500`} type="button">{children}</button>
    </>
  )
}

export default Button