import React, { useState, useEffect, useCallback } from 'react'
import styled, { css } from 'styled-components/macro'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import { navData } from '../data/navData'
import Logo from '../images/Hiluxplain.svg'
import { FaBars as Hamburger } from 'react-icons/fa'
import { MdLocationOn, MdPhone } from 'react-icons/md'

const Nav = styled.nav`
  width: 100vw;
  height: 90px;
  // border: 1px solid #c3c3c3;
  background: #fff;
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // visibility: ${({ showNav }) => !showNav && 'hidden'};
  transition: 0.5s all ease;
  transform: translateY(${({ showNav }) => !showNav && '-100vh'});
  font-size: 1rem;
  position: fixed;
  z-index: 1;
`

const Bar = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f2f2f2;
  font-size: 0.8rem;
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.6em;
  }
`

const BarCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e26313;
`

const Address = styled.div`
  ${BarCss}
`

const AddressLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #e26313;
  padding: 0 0 0 10px;
  font-weight: 500;
`

const Phone = styled.div`
  ${BarCss}
`

const PhoneLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #e26313;
  padding: 0 0 0 10px;
  font-weight: 500;
`

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`

const NavImgLogo = styled.div`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
`

const LogoImg = styled.img`
  height: 50px;
`

// const NavLogo = styled(LinkS)`
//   justify-self: flex-start;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   margin-left: 24px;
//   color: #e26313;
// `

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 100%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #e26313;
  }
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled.li`
  height: 80px;
`

const NavLinks = styled(LinkS)`
  color: #e26313;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;

  &.active {
    border-bottom: 3px solid #e26313;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #e26313;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #d55209;
  }
`

const NavBar = ({ toggle }) => {
  const [y, setY] = useState(window.scrollY)
  const [showNav, setShowNav] = useState(true)

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget
      if (y > window.scrollY) {
        //scroll up
        setShowNav(true)
      } else if (y < window.scrollY) {
        //scroll down
        setShowNav(false)
      }
      setY(window.scrollY)
    },
    [y]
  )

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  return (
    <Nav showNav={showNav}>
      <Bar>
        <Phone>
          <MdPhone />
          <PhoneLink href="tel:061-535444" target="_blank">
            061-535444
          </PhoneLink>
          {','}
          <PhoneLink href="tel:+977-9856023793" target="_blank">
            +977-9856023793
          </PhoneLink>
        </Phone>
        <Address>
          <MdLocationOn />
          <AddressLink
            href="https://goo.gl/maps/zuX2mkjoRz6npkNA9"
            target="_blank"
          >
            Uttam Chowk, Pokhara
          </AddressLink>
        </Address>
      </Bar>
      <NavbarContainer>
        {/* <NavLogo to="/">Rays</NavLogo> */}
        <NavImgLogo>
          <LogoImg src={Logo} alt="Rays Motors Logo" />
        </NavImgLogo>
        <MobileIcon onClick={toggle}>
          <Hamburger />
        </MobileIcon>
        <NavMenu>
          {navData.map((item, index) => (
            <NavItem key={index}>
              <NavLinks to={item.link}>{item.title}</NavLinks>
            </NavItem>
          ))}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/contact">Contact Us</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  )
}

export default NavBar
