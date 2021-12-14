import React, { useState } from 'react'
import NavBar from '../components/NavBarSecond'
import { vehiclesNavData } from '../data/navData'
import SideBar from '../components/SideBar'
import GlobalStyle from '../styles/globalStyles'
import Footer from '../components/Footer'
import VehiclesList from '../components/VehiclesList'
import ScrollToTop from '../components/ScrollToTop'

const Vehicles = () => {
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
      <VehiclesList />
      <Footer />
    </>
  )
}

export default Vehicles
