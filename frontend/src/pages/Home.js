import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Slider from '../components/Slider'
import { sliderData } from '../data/sliderData'
import GlobalStyle from '../styles/globalStyles'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <Slider slides={sliderData} />
    </>
  )
}

export default Home
