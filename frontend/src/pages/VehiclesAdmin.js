import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import VehiclesListAdmin from '../components/VehicleListAdmin'
import GlobalStyle from '../styles/globalStyles'

const VehiclesAdmin = ({ history }) => {
  return (
    <>
      <ScrollToTop />
      <GlobalStyle />
      <VehiclesListAdmin history={history} />
    </>
  )
}

export default VehiclesAdmin
