import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import UserList from '../components/UserList'
import GlobalStyle from '../styles/globalStyles'

const Users = ({ history }) => {
  return (
    <>
      <ScrollToTop />
      <GlobalStyle />
      <UserList history={history} />
    </>
  )
}

export default Users
