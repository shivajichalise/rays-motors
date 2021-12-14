import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, { css } from 'styled-components/macro'
import { MdRequestQuote } from 'react-icons/md'
import { RiBookletFill } from 'react-icons/ri'
import { isuzuTheme } from '../styles/theme'
import { Link } from 'react-router-dom'
import Table from './Table'
import Loader from './Loader'
import { listVehicleDetails } from '../actions/vehicleActions'

const VehicleContainer = styled.div`
  background: ${isuzuTheme.grey};
  width: 100%;
  display: flex;
  justify-content: center;
`
const VehicleWrapper = styled.div`
  // background: #0f0;
  width: 85vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ImageWrapper = styled.div`
  // background: #00f;
  width: 80%;
`

const Image = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`

const MenuContainer = styled.div`
  padding: 1.5rem 0;
`

const MenuWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MenuHead = styled.div`
  // background: #0f0;
  height: 30%;
  color: ${isuzuTheme.text};

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 200;
  }

  i {
    color: ${isuzuTheme.trueRed};
  }
`

const MenuContent = styled.div`
  // background: #ff0;
  width: 70%;
  color: ${isuzuTheme.text};

  p {
    padding: 1rem 0 0 0;
    text-align: center;
  }
`

const MenuOption = styled.div`
  // background: #f00;
  height: 70%;
  width: 50%;
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

const Quote = styled(MdRequestQuote)`
  ${OptionCss}
`

const Brochure = styled(RiBookletFill)`
  ${OptionCss}
`

const Vehicle = ({ id }) => {
  const dispatch = useDispatch()

  const vehicleDetails = useSelector((state) => state.vehicleDetails)
  const { loading, error, vehicle } = vehicleDetails

  useEffect(() => {
    dispatch(listVehicleDetails(id))
  }, [dispatch, id])

  return (
    <VehicleContainer>
      {loading ? (
        <Loader isLoading={loading} />
      ) : error ? (
        <h1>{error}</h1>
      ) : Object.keys(vehicle).length > 0 ? (
        <VehicleWrapper>
          <ImageWrapper>
            <Image src={vehicle.image.banner} alt={vehicle.name} />
          </ImageWrapper>
          <MenuContainer>
            <MenuWrapper>
              <MenuHead>
                <h1 className="useIsuzuFont">{vehicle.name}</h1>
                <i>{vehicle.slogan}</i>
              </MenuHead>
              <MenuContent>
                <p>{vehicle.description}</p>
              </MenuContent>
              <MenuOption>
                <OptionDiv>
                  <MenuLink to="/quote">
                    <Quote />
                  </MenuLink>
                  <p>Get a Quote</p>
                </OptionDiv>
                <OptionDiv>
                  <MenuLink to={vehicle.brochure} target="_blank">
                    <Brochure />
                  </MenuLink>
                  <p>Get a Brochure</p>
                </OptionDiv>
              </MenuOption>
            </MenuWrapper>
          </MenuContainer>
          <h2 color={isuzuTheme.text}>Specifications</h2>
          <Table v={vehicle} />
        </VehicleWrapper>
      ) : (
        <p>error</p>
      )}
    </VehicleContainer>
  )
}

export default Vehicle
