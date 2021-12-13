import React, { useState } from 'react'
import NavBar from '../components/NavBarSecond'
import { vehiclesNavData } from '../data/navData'
import SideBar from '../components/SideBar'
import GlobalStyle from '../styles/globalStyles'
import Compare from '../components/Compare'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const ComparePage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <SideBar isOpen={isOpen} toggle={toggle} navData={vehiclesNavData} />
      <NavBar navData={vehiclesNavData} toggle={toggle} />
      <Compare />
      <Footer />
    </>
  )
}

export default ComparePage
