import React from 'react'
import styled from 'styled-components'
import img1 from '../images/cars/d-max-doubleCab.jpg'
import img2 from '../images/cars/isuzu-truck-sqr.jpg'
import { motion } from 'framer-motion'
import { Button } from './Button'

const SplitBannerContainer = styled.div`
  // background: #f00;
  height: 100vh;
  width: 100vw;
`
const SplitBannerWrapper = styled.div`
  // background: #0f0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const LatestVehicle = styled.div`
  background: #000;
  position: relative;
  overflow: hidden;
  width: 50%;
  height: 100%;
  flex: 50%;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex: 100%;
    height: 50%;
  }
`
const IsuzuNews = styled.div`
  background: #000;
  position: relative;
  overflow: hidden;
  width: 50%;
  height: 100%;
  flex: 50%;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    flex: 100%;
    height: 50%;
  }
`

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
`

const ImageContent = styled(motion.div)`
  position: relative;
  z-index: 10;
  width: 90%;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 1.5rem 1.5rem;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    font-weight: 500;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 768px) {
    flex: 100%;
  }
`

const SplitBanner = () => {
  return (
    <SplitBannerContainer id="vehicles">
      <SplitBannerWrapper>
        <LatestVehicle>
          <Image
            src={img1}
            alt="asda"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 2 }}
          />
          <ImageContent>
            <p>Store</p>
            <h1>Latest Arrivals</h1>
            <Button primary={true}>Discover</Button>
          </ImageContent>
        </LatestVehicle>
        <IsuzuNews>
          <Image
            src={img2}
            alt="asda"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 2 }}
          />
          <ImageContent>
            <p>News</p>
            <h1>Know what's happening in ISUZU</h1>
            <Button primary={true}>Discover</Button>
          </ImageContent>
        </IsuzuNews>
      </SplitBannerWrapper>
    </SplitBannerContainer>
  )
}

export default SplitBanner
