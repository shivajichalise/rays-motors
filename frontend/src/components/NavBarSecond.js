import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import { FaBars as Hamburger } from 'react-icons/fa'
import { MdLocationOn, MdPhone } from 'react-icons/md'
import { isuzuTheme } from '../styles/theme'

const Nav = styled.nav`
  background: ${isuzuTheme.white};
  height: 90px;
  width: 100%;
  border: 1px solid ${isuzuTheme.grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`

const Bar = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${isuzuTheme.grey};
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
  color: ${isuzuTheme.trueRed};
`

const Address = styled.div`
  ${BarCss}
`

const AddressLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${isuzuTheme.trueRed};
  padding: 0 0 0 10px;
  font-weight: 500;
`

const Phone = styled.div`
  ${BarCss}
`

const PhoneLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${isuzuTheme.trueRed};
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

// const LogoImg = styled.img`
//   height: 50px;
// `

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
    color: ${isuzuTheme.red};
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
const NavLink = css`
  color: ${isuzuTheme.red};
  display: flex;
  align-items: center;
  padding: 0 0 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`

const LogoText = styled(LinkR)`
  ${NavLink}
  font-size: 1.2rem;
`

const NavLinks = styled(LinkS)`
  color: ${isuzuTheme.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;

  // &.active {
  //   font-weight: 700;
  // }
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
  background: ${isuzuTheme.red};
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
    background: ${isuzuTheme.trueRed};
  }
`

const NavBar = ({ navData, toggle }) => {
  return (
    <Nav>
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
          <LogoText className="useIsuzuFont" to="/">
            RAYS MOTORS
          </LogoText>
          {/* <LogoImg */}
          {/*   src={Logo} */}
          {/*   alt="Rays Motors Logo" */}
          {/*   to="/" */}
          {/*   onClick={toggleHome} */}
          {/* /> */}
        </NavImgLogo>
        <MobileIcon onClick={toggle}>
          <Hamburger />
        </MobileIcon>
        <NavMenu>
          {navData.map((item, index) => (
            <NavItem key={index}>
              <NavLinks
                to={item.link}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                {item.title}
              </NavLinks>
            </NavItem>
          ))}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/contact" target="_blank">
            Contact Us
          </NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  )
}

export default NavBar
