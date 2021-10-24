import React from 'react'
import styled from 'styled-components'
import isuzuLogo from '../images/isuzu-logo.png'

const AboutContainer = styled.div`
  background: #f2f2f2;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AboutWrapper = styled.div`
  background: #fff;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1024px) {
    justify-content: space-around;
  }

  @media screen and (max-width: 768px) {
    height: 90%;
  }
`

const InfoHead = styled.div`
  background: #e26313;
  color: #fff;
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    align-items: flex-start;

    h1,
    p {
      padding: 0.2rem 1.5rem;
      font-size: 2rem;
    }

    @media screen and (max-width: 768px) {
      height: 32%;

      h1,
      p {
        padding: 0.2rem 1rem;
        font-size: 1rem;
      }
    }
  }
`

const Info = styled.div`
  background: #f2f2f2;
  height: 37%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #e26313;

  @media screen and (max-width: 1024px) {
    align-items: flex-start;
    h2,
    p {
      font-size: 2rem;
      padding: 0.2rem 1.5rem;
    }

  @media screen and (max-width: 768px) {
    height: 43%;

    h2,
    p {
      font-size: 1rem;
    }
  }
`

const ImageWrapper = styled.div`
  background: #f2f2f2;
  height: 45%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  // @media screen and (max-width: 1024px) {
  //   height: 20%;
  // }

  @media screen and (max-width: 768px) {
    height: 25%;
  }
`

const Image = styled.img`
  width: 90%;
  object-fit: contain;
`

const AboutUs = () => {
  return (
    <AboutContainer>
      <AboutWrapper>
        <InfoHead>
          <h1>Who are we ?</h1>
          <p>
            We Rays Motors Pvt. Ltd. are the authorized distributor of Isuzu
            vechicle for Gandaki province of Nepal.
          </p>
        </InfoHead>
        <Info>
          <h2>About ISUZU</h2>
          <p>Power to "Deliver" for people around the world.</p>
          <p>
            ISUZU has the ambitious vision to minimize environmental impacts and
            secure a prosperous and sustainable society by year 2050.
          </p>
        </Info>
        <ImageWrapper>
          <Image src={isuzuLogo} alt="Isuzu Logo" />
        </ImageWrapper>
      </AboutWrapper>
    </AboutContainer>
  )
}

export default AboutUs
