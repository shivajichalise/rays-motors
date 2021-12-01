import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import UserEdit from '../components/UserEdit'
import GlobalStyle from '../styles/globalStyles'

const User = ({ match, history }) => {
  return (
    <>
      <ScrollToTop />
      <GlobalStyle />
      <UserEdit match={match} history={history} />
    </>
  )
}

export default User
