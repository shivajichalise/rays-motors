import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Login from '../components/Login'
import GlobalStyle from '../styles/globalStyles'

const LoginPage = ({ location, history }) => {
  return (
    <>
      <ScrollToTop />
      <GlobalStyle />
      <Login location={location} history={history} />
    </>
  )
}

export default LoginPage
