import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import VehiclesEdit from '../components/VehicleEdit'
import GlobalStyle from '../styles/globalStyles'

const Vehicle = ({ match, history }) => {
  return (
    <>
      <ScrollToTop />
      <GlobalStyle />
      <VehiclesEdit match={match} history={history} />
    </>
  )
}

export default Vehicle
