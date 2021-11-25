import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Register from '../components/Register'
import GlobalStyle from '../styles/globalStyles'

const LoginPage = ({ location, history }) => {
  return (
    <>
      <ScrollToTop />
      <GlobalStyle />
      <Register location={location} history={history} />
    </>
  )
}

export default LoginPage
