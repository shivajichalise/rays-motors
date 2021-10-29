import React from 'react'
import styled, { css } from 'styled-components/macro'
import { MdRequestQuote, MdCompare } from 'react-icons/md'
import { FaTruckPickup } from 'react-icons/fa'
import { RiBookletFill } from 'react-icons/ri'
import { isuzuTheme } from '../styles/theme'
import { Link } from 'react-router-dom'

const MenuContainer = styled.div`
  background: ${isuzuTheme.grey};
  padding: 1.5rem 0;
`

const MenuWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const MenuHead = styled.div`
  // background: #0f0;
  height: 30%;
  color: ${isuzuTheme.text};

  display: flex;
  justify-content: center;
  align-items: center;
`

const MenuOption = styled.div`
  // background: #f00;
  height: 70%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

const OptionDiv = styled.div`
  flex: 25%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${isuzuTheme.text};

  @media screen and (max-width: 1000px) {
    flex: 50%;
  }

  @media screen and (max-width: 768px) {
    flex: 100%;
  }
`

const OptionCss = css`
  height: 100px;
  width: 100px;
  padding: 1rem 0;
  color: ${isuzuTheme.red};

  &:hover {
    transform: scale(1.05);
    color: ${isuzuTheme.trueRed};
  }
`

const MenuLink = styled(Link)``

const Truck = styled(FaTruckPickup)`
  ${OptionCss}
`

const Quote = styled(MdRequestQuote)`
  ${OptionCss}
`

const Brochure = styled(RiBookletFill)`
  ${OptionCss}
`

const Compare = styled(MdCompare)`
  ${OptionCss}
`

const Menu = () => {
  return (
    <MenuContainer id="shopping-tools">
      <MenuWrapper>
        <MenuHead>
          <h1>SHOPPING TOOLS</h1>
        </MenuHead>
        <MenuOption>
          <OptionDiv>
            <MenuLink to="/vehicles">
              <Truck />
            </MenuLink>
            <p>All Vehicles</p>
          </OptionDiv>
          <OptionDiv>
            <MenuLink to="/request-quote">
              <Quote />
            </MenuLink>
            <p>Get a Quote</p>
          </OptionDiv>
          <OptionDiv>
            <MenuLink to="/vehicles">
              <Brochure />
            </MenuLink>
            <p>Get a Brochure</p>
          </OptionDiv>
          <OptionDiv>
            <MenuLink to="/compare">
              <Compare />
            </MenuLink>
            <p>Compare Vehicles</p>
          </OptionDiv>
        </MenuOption>
      </MenuWrapper>
    </MenuContainer>
  )
}

export default Menu
