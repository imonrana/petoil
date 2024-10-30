import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'

function App() {


  return (
    <>
      <Header/>
      <Navbar/>
      <Banner/>
    </>
  )
}

export default App
