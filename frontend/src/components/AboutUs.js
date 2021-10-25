import React from 'react'
import styled from 'styled-components'
import isuzuLogo from '../images/isuzu-logo-sqr.png'

const AboutContainer = styled.div`
  background: #f2f2f2;
  height: 100vh;
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
    height: 95%;
    width: 95%;
  }
`

const Info = styled.div`
  background: #e26313;
  width: 100%;
  height: 80%;

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
  color: #fff;

  p {
    margin: 0 0 1.5rem 0;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 50%;
    padding: 2rem 0;
  }

  @media screen and (max-width: 375px) and (max-height: 667px) {
    font-size: 0.83rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 0.85rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.7rem;
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
              distributor of ISUZU vechicle for the Gandaki Province (Province
              No. 4) of Nepal.
            </p>

            <h3>About ISUZU</h3>
            <p>
              ISUZU has the ambitious vision to minimize environmental impacts
              and secure a prosperous and sustainable society by year 2050.
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
