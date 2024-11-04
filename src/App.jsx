import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Supplier from './Components/Suppliler/Supplier'
import Survices from './Components/Survices/Survices'
import AboutCompany from './Components/AboutCompany/AboutCompany'
import Logo from './Components/Logo/Logo'
import Blog from './Components/Blog/Blog'
import Map from './Components/Map/Map'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <>
      <Header/>
      <Navbar/>
     <main>
     <Banner/>
      <Supplier/>
      <Survices/>
      <AboutCompany/>
      <Logo/>
      <Blog/>
      <Map/>
     </main>
     <Footer/>
    </>
  )
}

export default App
