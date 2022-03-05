import React from 'react'
import styled from 'styled-components'
import isuzuLogo from '../images/isuzu-logo-sqr-redbg.jpg'
import { isuzuTheme } from '../styles/theme'

const AboutContainer = styled.div`
  background: ${isuzuTheme.background};
  height: 115vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AboutWrapper = styled.div`
  // background: #f00;
  height: 70%;
  width: 80%;

  display: flex;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 98%;
    width: 95%;
  }
`

const Info = styled.div`
  background: ${isuzuTheme.card};
  width: 100%;
  height: 77%;

  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 100%;
    flex-direction: column;
  }
`

const InfoContent = styled.div`
  // background: #0ff;
  width: 50%;
  word-wrap: break-word;
  padding: 0 2rem;
  color: ${isuzuTheme.text};

  p {
    margin: 0 0 0.4rem 0;
  }

  h1,
  strong,
  h3,
  i {
    color: ${isuzuTheme.trueRed};
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 50%;
    padding: 2rem 0;
  }

  @media screen and (max-width: 375px) and (max-height: 667px) {
    font-size: 0.63rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 0.65rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.5rem;
  }
`

const ImageWrapper = styled.div`
  // background: #00f;
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  right: 3%;

  @media screen and (max-width: 768px) {
    bottom: 3%;
    right: 0;
    width: 100%;
    height: 40%;
  }
`

const Image = styled.img`
  object-fit: contain;
  width: 90%;
`

const AboutUs = () => {
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <Info>
          <InfoContent>
            <h1>Who are we ?</h1>
            <p>
              We <strong>Rays Motors Pvt. Ltd.</strong> are the official
              distributor of ISUZU Light Commercial Vehicles for the Gandaki
              Province (Province No. 4) of Nepal.
            </p>

            <h3>About ISUZU</h3>
            <p>
              ISUZU is a Japanese automaker that builds commercial vehicles,
              utility vehicles, and diesel engines which are sold in over 100
              countries worldwide. To provide a worry-free ownership experience,
              ISUZU offers a 3-year/100,000 km manufacturer's warranty. ISUZU
              has set an ambitious goal of eliminating environmental
              consequences and ensuring a thriving and sustainable society by
              2050.
            </p>

            <i>Power to "Deliver" for people around the world.</i>
          </InfoContent>
        </Info>
        <ImageWrapper>
          <Image src={isuzuLogo} alt="ISUZU Logo" />
        </ImageWrapper>
      </AboutWrapper>
    </AboutContainer>
  )
}

export default AboutUs
