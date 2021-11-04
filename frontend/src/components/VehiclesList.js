import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import Dmax from '../images/banners/d-max.jpg'
// import Mux from '../images/banners/mu-x.jpg'
// import Vcross from '../images/banners/v-cross.jpg'
// import Scab from '../images/banners/s-cab.jpg'
// import Hilander from '../images/banners/hi-lander.jpg'
// import SingleCab from '../images/banners/single-cab.jpg'
import { isuzuTheme } from '../styles/theme'
import { ButtonLink } from '../components/Button'
import axios from 'axios'

const VehicleListContainer = styled.div`
  // background: #f00;
  width: 100%;
`
const VehicleListWrapper = styled.div`
  // background: #0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const VehicleCard = styled.div`
  transition: 0.3s;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`

const CardLeft = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: ${({ reverse }) => (reverse ? 'flex-end' : 'flex-start')};
  align-items: center;
  line-height: 1.4;
  padding: 2rem 2rem 2rem 2rem;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  h1 {
    color: ${isuzuTheme.red};
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    color: ${isuzuTheme.text};
    margin-bottom: 1rem;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    flex: 100%;
    order: 2;
  }
`
const CardRight = styled.div`
  flex: 50%;
  order: ${({ reverse }) => (reverse ? '1' : '2')};

  @media screen and (max-width: 768px) {
    flex: 100%;
    order: 1;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const VehiclesList = () => {
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    const fetchVehicles = async () => {
      const { data } = await axios.get('/api/vehicles')
      setVehicles(data)
    }
    fetchVehicles()
  }, [])

  return (
    <VehicleListContainer>
      <VehicleListWrapper>
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle._id}>
            <CardLeft reverse={vehicle._id % 2 === 0 ? true : false}>
              <h1>{vehicle.name}</h1>
              <p>{vehicle.slogan}</p>
              <ButtonLink primary="primary" to={`/vehicles/${vehicle.slug}`}>
                Know More
              </ButtonLink>
            </CardLeft>
            <CardRight reverse={vehicle._id % 2 === 0 ? true : false}>
              <ImageWrapper>
                <Image src={vehicle.image} alt={vehicle.name} />
              </ImageWrapper>
            </CardRight>
          </VehicleCard>
        ))}

        {/* <VehicleCard> */}
        {/*   <CardLeft reverse={0}> */}
        {/*     <h1>Isuzu MU-X</h1> */}
        {/*     <p>Take The Lead</p> */}
        {/*     <ButtonLink primary="primary" to="/vehicles/mux"> */}
        {/*       Know More */}
        {/*     </ButtonLink> */}
        {/*   </CardLeft> */}
        {/*   <CardRight reverse={0}> */}
        {/*     <ImageWrapper> */}
        {/*       <Image src={Mux} alt="Isuzu MU-X" /> */}
        {/*     </ImageWrapper> */}
        {/*   </CardRight> */}
        {/* </VehicleCard> */}
        {/* <VehicleCard> */}
        {/*   <CardLeft reverse={1}> */}
        {/*     <h1>Isuzu S-CAB</h1> */}
        {/*     <p>Success is a Long Journey. Start Here</p> */}
        {/*     <ButtonLink primary="primary" to="/vehicles/scab"> */}
        {/*       Know More */}
        {/*     </ButtonLink> */}
        {/*   </CardLeft> */}
        {/*   <CardRight reverse={1}> */}
        {/*     <ImageWrapper> */}
        {/*       <Image src={Scab} alt="Isuzu D-Max" /> */}
        {/*     </ImageWrapper> */}
        {/*   </CardRight> */}
        {/* </VehicleCard> */}
        {/* <VehicleCard> */}
        {/*   <CardLeft reverse={false}> */}
        {/*     <h1>Isuzu Single Cab</h1> */}
        {/*     <p>Super Strong Performance, Super Strong Results</p> */}
        {/*     <ButtonLink primary="primary" to="/vehicles/singlecab"> */}
        {/*       Know More */}
        {/*     </ButtonLink> */}
        {/*   </CardLeft> */}
        {/*   <CardRight reverse={false}> */}
        {/*     <ImageWrapper> */}
        {/*       <Image src={SingleCab} alt="Isuzu Single Cab" /> */}
        {/*     </ImageWrapper> */}
        {/*   </CardRight> */}
        {/* </VehicleCard> */}
        {/* <VehicleCard> */}
        {/*   <CardLeft reverse={true}> */}
        {/*     <h1>Isuzu V-Cross</h1> */}
        {/*     <p>Born All Mighty</p> */}
        {/*     <ButtonLink primary="primary" to="/vehicles/vcross"> */}
        {/*       Know More */}
        {/*     </ButtonLink> */}
        {/*   </CardLeft> */}
        {/*   <CardRight reverse={true}> */}
        {/*     <ImageWrapper> */}
        {/*       <Image src={Vcross} alt="Isuzu D-Max" /> */}
        {/*     </ImageWrapper> */}
        {/*   </CardRight> */}
        {/* </VehicleCard> */}
        {/* <VehicleCard> */}
        {/*   <CardLeft reverse={false}> */}
        {/*     <h1>Isuzu Hi-Lander</h1> */}
        {/*     <p>Unbelievable Versatility</p> */}
        {/*     <ButtonLink primary="primary" to="/vehicles/hilander"> */}
        {/*       Know More */}
        {/*     </ButtonLink> */}
        {/*   </CardLeft> */}
        {/*   <CardRight reverse={false}> */}
        {/*     <ImageWrapper> */}
        {/*       <Image src={Hilander} alt="Isuzu D-Max" /> */}
        {/*     </ImageWrapper> */}
        {/*   </CardRight> */}
        {/* </VehicleCard> */}
      </VehicleListWrapper>
    </VehicleListContainer>
  )
}

export default VehiclesList
