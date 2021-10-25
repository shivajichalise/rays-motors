import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { navData } from '../data/navData'

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #141414;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

const CloseIcon = styled(FaTimes)`
  color: #e26313;
`

const SidebarWrapper = styled.div`
  color: #e26313;
`

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-column: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`

const SidebarLink = styled(LinkS)`
  dispay: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #e26313;
    transition: 0.2 ease-in-out;
  }
`

const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #e26313;
  white-space: nowrap;
  padding: 16px 16px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #d55209;
  }
`

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {navData.map((item, index) => (
            <SidebarLink
              key={index}
              to={item.link}
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              {item.title}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="/contact-us" onClick={toggle}>
            Contact Us
          </SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default SideBar
