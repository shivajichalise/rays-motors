import React, { useState } from 'react'
import NavBar from '../components/NavBarSecond'
import { vehiclesNavData } from '../data/navData'
import SideBar from '../components/SideBar'
import GlobalStyle from '../styles/globalStyles'
import Vehicle from '../components/Vehicle'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const SingleVehicle = ({ match }) => {
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
      <Vehicle match={match} />
      <Footer />
    </>
  )
}

export default SingleVehicle
