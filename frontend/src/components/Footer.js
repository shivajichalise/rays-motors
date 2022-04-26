import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
// import logo from '../images/isuzu-logo-sqr.png'
import { isuzuTheme } from '../styles/theme'

const FooterContainer = styled.footer`
  background-color: #141414;
`

const FooterWrapper = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

const FooterLinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px 0px 16px 80px;
  text-align: left;
  width: 280px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`

const FooterLinkTitle = styled.h1`
  font-size: 18px;
  margin-bottom: 16px;
`

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: ${isuzuTheme.red};
    transition: 0.3 ease-in-out;
  }
`

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

const SocialLogo = styled(Link)`
  color: ${isuzuTheme.white};
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`

// const FooterImg = styled.img`
//   width: 100px;
//   height: 100px;
// `

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`

const Anchor = styled.a`
  text-decoration: none;
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: ${isuzuTheme.red};
    transition: 0.3 ease-in-out;
  }
`

const LogoText = styled.h1`
  font-family: Usuzi;
  font-size: 1.2rem;
  font-weight: 200;
`

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>SHOPPING TOOLS</FooterLinkTitle>
              <FooterLink to="/vehicles">See all Vehicles</FooterLink>
              <FooterLink to="/vehicles">Get a Brochure</FooterLink>
              <FooterLink to="/quote">Get a Quote</FooterLink>
              <FooterLink to="/compare">Compare Vehicles</FooterLink>
              <FooterLink to="/testdrive">Book Test Drive</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>CONTACT US</FooterLinkTitle>
              <Anchor href="tel:061-537333" target="_blank">
                061-537333
              </Anchor>
              <Anchor href="tel:061-535444" target="_blank">
                061-535444
              </Anchor>
              <Anchor href="mailto:info@raysmotors.com.np" target="_blank">
                info@raysmotors.com.np
              </Anchor>
              <Anchor
                href="https://goo.gl/maps/EWUQ2kWBRB3KDso36"
                target="_blank"
              >
                Find us from Google Map
              </Anchor>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <Anchor href="https://www.facebook.com/raysmotors" target="_blank">
              Facebook
            </Anchor>
            {/* <Anchor href="https://www.instagram.com/raysmotors" target="_blank"> */}
            {/*   Instagram */}
            {/* </Anchor> */}
          </FooterLinkItems>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to="/" onClick={toggleHome}>
              <LogoText>RAYS MOTORS</LogoText>
            </SocialLogo>
            {/* <SocialLogo to="/"> */}
            {/*   <FooterImg src={logo} alt="Rays Motors Logo" /> */}
            {/* </SocialLogo> */}
            <WebsiteRights>
              Rays Motors Pvt. Ltd. © {new Date().getFullYear()} All rights
              reserved.
            </WebsiteRights>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
