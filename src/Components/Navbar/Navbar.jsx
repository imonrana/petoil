import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
// nav img import
import logo from "../../assets/logo.png"
import Container from '../Container/Container'
import Button from '../Button/Button'



// nav links data

const navItems = [
       {href: "#home" , level: "home"},
       {href:"#About", level: "About"},
       {href: "#Services", level:"Services"},
       {href: "#Gallery", level: "Gallery"},
       {href: "#Blog", level: "Blog"}
]




const Navbar = () => {

    // responsive navbar toggle button 

const [toggle, setToggle] = useState(false);

const handelToogle = ()=>{
    setToggle(!toggle)
}


  return (
    <>
    {/* navbar section start */}
    <nav className='bg-primary py-[27px] sticky top-0 z-[999]'>
        <Container>
            {/* nav wrapper start */}
            <div className=' mx-5 md:flex items-center'>

            {/* logo start */}
            <div className='w-full md:w-1/5 flex justify-between  md:block'>
             <a href="#logo"><img src={logo} alt="Logo" /></a>
             <button className='text-primaryText text-4xl  md:hidden'>
             <IoIosMenu onClick={handelToogle} />
             </button>
            </div>
            {/*  logo end */}

            {/* nav links start */}
            <div className={`${toggle ? "visible" : "hidden"}  transition-all duration-700 ease-in-out md:visible  ml-4 mt-3 md:ml-0 md:mt-0 md:flex gap-x-[72px] justify-end w-4/5`}>
                <ul className='space-y-1 md:space-y-0 md:flex   items-center gap-x-[47px]'>
                    {
                        navItems.map((navLinks, href) =>(
                            <li className='font-poppins font-semibold text-base text-primaryText hover:text-secondary transition-all duration-500  ' key={href}><a href={navLinks.href}>{navLinks.level}</a></li>
                        ))
                    }
                    
                </ul>
                <div>
                    <Button className=" mt-3 md:mt-0 hover:text-secondaryText duration-700 transition-all"><a href="#contact">CONTACT</a></Button>
                    </div>
            </div>

            {/* nav links end */}
            </div>
            {/* nav warpper end */}
        </Container>

    </nav>
    {/* navbar end */}
    </>
  )
}

export default Navbar