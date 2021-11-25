import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Profile from '../components/Profile'
import GlobalStyle from '../styles/globalStyles'

const ProfilePage = ({ location, history }) => {
  return (
    <>
      <ScrollToTop />
      <GlobalStyle />
      <Profile location={location} history={history} />
    </>
  )
}

export default ProfilePage
