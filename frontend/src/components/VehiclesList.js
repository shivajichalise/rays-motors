import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { listVehicles } from '../actions/vehicleActions'
// import Dmax from '../images/banners/d-max.jpg'
// import Mux from '../images/banners/mu-x.jpg'
// import Vcross from '../images/banners/v-cross.jpg'
// import Scab from '../images/banners/s-cab.jpg'
// import Hilander from '../images/banners/hi-lander.jpg'
// import SingleCab from '../images/banners/single-cab.jpg'
import { isuzuTheme } from '../styles/theme'
import { ButtonLink } from '../components/Button'
import Loader from '../components/Loader'

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
  const dispatch = useDispatch()
  const vehicleList = useSelector((state) => state.vehicleList)
  const { loading, error, vehicles } = vehicleList

  useEffect(() => {
    dispatch(listVehicles())
  }, [dispatch])

  return (
    <VehicleListContainer>
      {loading ? (
        <Loader isLoading={loading} />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <VehicleListWrapper>
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle._id}>
              <CardLeft
                reverse={
                  vehicle._id[vehicle._id.length - 1] % 2 === 0 ? true : false
                }
              >
                <h1>{vehicle.name}</h1>
                <p>{vehicle.slogan}</p>
                <ButtonLink primary="primary" to={`/vehicles/${vehicle._id}`}>
                  Know More
                </ButtonLink>
              </CardLeft>
              <CardRight
                reverse={
                  vehicle._id[vehicle._id.length - 1] % 2 === 0 ? true : false
                }
              >
                <ImageWrapper>
                  <Image src={vehicle.image.banner} alt={vehicle.name} />
                </ImageWrapper>
              </CardRight>
            </VehicleCard>
          ))}
        </VehicleListWrapper>
      )}
    </VehicleListContainer>
  )
}

export default VehiclesList
