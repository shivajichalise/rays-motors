import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'
import { isuzuTheme } from '../styles/theme'
import { FaUserCircle } from 'react-icons/fa'

const AnchorCss = css`
  display: block;
  color: ${isuzuTheme.card};
  text-align: center;
  text-decoration: none;
  font-size: 17px;
`

const Menu = styled.div`
  height: 60px;
  margin: 0 0 1rem 0;
  overflow: hidden;
  background-color: ${isuzuTheme.red};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  .leftAlign {
    ${AnchorCss}
    float: left;
    font-weight: 700;
  }

  .rightAlign {
    ${AnchorCss}
    float: right;
  }
`

const MenuContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`

const Anchor = styled(Link)``

const Dropdown = styled.div`
  overflow: hidden;
  float: right;

  &:hover {
    div {
      display: block;
    }
  }
`

const DropdownButton = styled.button`
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
`

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${isuzuTheme.card};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 99;
`

const DropdownAnchor = styled(Link)`
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
`

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <Menu>
      <MenuContent>
        <Anchor to="/" className="leftAlign">
          Rays Motors
        </Anchor>
        {userInfo ? (
          <Dropdown>
            <DropdownButton>
              <FaUserCircle /> {userInfo.name}
            </DropdownButton>
            <DropdownContent>
              <DropdownAnchor to="/profile">Profile</DropdownAnchor>
              <DropdownAnchor to="#" onClick={logoutHandler}>
                Logout
              </DropdownAnchor>
            </DropdownContent>
          </Dropdown>
        ) : (
          <Anchor to="/login" className="rightAlign">
            <FaUserCircle /> Sign In
          </Anchor>
        )}
      </MenuContent>
    </Menu>
  )
}

export default Header
