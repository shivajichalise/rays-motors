import React, { useState } from 'react'
import AboutUs from '../components/AboutUs'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import { navData } from '../data/navData'
import SideBar from '../components/SideBar'
import Slider from '../components/Slider'
import SplitBanner from '../components/SplitBanner'
import { sliderDataForHeroSection, sliderData } from '../data/sliderData'
import GlobalStyle from '../styles/globalStyles'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar navData={navData} toggle={toggle} />
      <HeroSection slides={sliderDataForHeroSection} />
      <AboutUs />
      <Slider slides={sliderData} />
      <SplitBanner />
      <Menu />
      <Footer />
    </>
  )
}

export default Home
