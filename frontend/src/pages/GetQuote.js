import React, { useState } from 'react'
import NavBar from '../components/NavBarSecond'
import { vehiclesNavData } from '../data/navData'
import SideBar from '../components/SideBar'
import GlobalStyle from '../styles/globalStyles'
import Quote from '../components/Quote'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const GetBrochure = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar navData={vehiclesNavData} toggle={toggle} />
      <Quote />
      <Footer />
    </>
  )
}

export default GetBrochure
