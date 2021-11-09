import React from 'react'
import styled from 'styled-components'
import Img from '../images/cars/banners/mux.jpg'

const BrochureContainer = styled.div`
  background: #f00;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`

const BrochureWrapper = styled.div`
  background: #0f0;
  width: 95%;
  display: flex;
`

const VehicleWrapper = styled.div`
  background: #00f;
  flex: 50%;

  @media screen and (max-width: 768px) {
    flex: 100%;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`

const VehicleContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

const ContentHead = styled.div`
  background: #ff0;
  display: flex;
  justify-content: space-around;
`

const ContentBody = styled.div`
  word-wrap: break-word;
  padding: 1rem;
`

const GetBrochure = () => {
  return (
    <BrochureContainer>
      <BrochureWrapper>
        <VehicleWrapper>
          <ImageWrapper>
            <Image src={Img} alt="das" />
          </ImageWrapper>
          <VehicleContent>
            <ContentHead>
              <h1>ISUZU</h1>
              <h1>Download</h1>
            </ContentHead>
            <ContentBody>
              <p>dasdasdasddddddddddddddddddddddddddddddddddddddddddddd</p>
            </ContentBody>
          </VehicleContent>
        </VehicleWrapper>
        <VehicleWrapper>
          <ImageWrapper>
            <Image src={Img} alt="das" />
          </ImageWrapper>
          <VehicleContent>
            <ContentHead>
              <h1>ISUZU</h1>
              <h1>Download</h1>
            </ContentHead>
            <ContentBody>
              <p>dasdasdasddddddddddddddddddddddddddddddddddddddddddddd</p>
            </ContentBody>
          </VehicleContent>
        </VehicleWrapper>
      </BrochureWrapper>
    </BrochureContainer>
  )
}

export default GetBrochure
