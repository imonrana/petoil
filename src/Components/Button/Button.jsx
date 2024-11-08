import React from 'react'

const Button = ({className, children}) => {
  return (
    <>
    <button className={` ${className} py-[10px] px-[15px] lg:py-[14px]  lg:px-[30px] border-2 bg-primary text-primaryText font-poppins font-semibold text-sm lg:text-base transition duration-500`} type="button">{children}</button>
    </>
  )
}

export default Button