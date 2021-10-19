import React from 'react'
import styled from 'styled-components'
import Image from '../images/dmax.jpg'

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 560px;
  position: relative;
  z-index: 1;

  /* Add :before styles */
`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={Image} alt="Isuzu D-Max 2021" />
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection
