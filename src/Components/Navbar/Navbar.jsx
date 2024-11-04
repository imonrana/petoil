import React from 'react'

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
  return (
    <>
    {/* navbar section start */}
    <nav className='bg-primary py-[27px] sticky top-0 z-[999]'>
        <Container>
            {/* nav wrapper start */}
            <div className='flex items-center'>

            {/* logo start */}
            <div className='w-1/5'>
             <a href="#logo"><img src={logo} alt="Logo" /></a>
            </div>
            {/*  logo end */}

            {/* nav links start */}
            <div className='flex gap-x-[72px] justify-end w-4/5'>
                <ul className='flex   items-center gap-x-[47px]'>
                    {
                        navItems.map((navLinks, href) =>(
                            <li className='font-poppins font-semibold text-base text-primaryText hover:text-secondary transition-all duration-500  ' key={href}><a href={navLinks.href}>{navLinks.level}</a></li>
                        ))
                    }
                    
                </ul>
                <div>
                    <Button className="hover:text-secondaryText duration-700 transition-all"><a href="#contact">CONTACT</a></Button>
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