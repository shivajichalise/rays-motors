import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import { navData } from '../data/navData'
import Logo from '../images/Hiluxplain.svg'
import { FaBars as Hamburger } from 'react-icons/fa'
import { MdLocationOn, MdPhone } from 'react-icons/md'

const Nav = styled.nav`
  background: #fff;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  z-index: 10;
  box-shadow: 0 10px 10px #000;
  @media screen (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

const Bar = styled.div`
  background: #f2f2f2;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  top: 0;
  padding: 1rem 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.6em;
  }
`

const BarCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
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
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
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
    transform: translate(-100%, 60%);
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
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #d55209;
  }
`

const NavBar = ({ toggle }) => {
  return (
    <>
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
      <Nav>
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
    </>
  )
}

export default NavBar
