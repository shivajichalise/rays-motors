import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  listVehicles,
  listCompareVehiclesDetails,
} from '../actions/vehicleActions'
import styled from 'styled-components'
import { isuzuTheme } from '../styles/theme'
import LoaderMin from './LoaderMin'
import Message from './Message'
import Hr from './Hr'

const CompareContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0 1rem 0;
`

const CompareWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`

const Table = styled.table`
  border: 1px solid black;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 280px) {
    font-size: 0.5rem;
  }
`
const Tbody = styled.tbody``

const TD = styled.td`
  padding: 15px;
  background-color: ${isuzuTheme.extraLightRed};
`

const TR = styled.tr`
  .header {
    background-color: ${isuzuTheme.red};
  }
`

const TH = styled.th`
  padding: 15px;
  color: ${isuzuTheme.white};
`

const Select = styled.select`
  color: ${isuzuTheme.text};
  padding: 16px 16px;
  margin: 0.5rem;
  border: none;
  border-radius: 4px;
  background: ${isuzuTheme.grey};
  border: 1px solid #dddddd;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    outline: none;
    border: 1px solid #bbbbbb;
  }
`

const Button = styled.button`
  background: ${isuzuTheme.red};
  padding: 10px 10px;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
`

const Header = styled.div``

const H1 = styled.h1`
  color: ${isuzuTheme.text};
`

const Compare = () => {
  const dispatch = useDispatch()

  const vehicleList = useSelector((state) => state.vehicleList)
  const { loading, error, vehicles } = vehicleList

  const [compareError, setCompareError] = useState(false)

  const vehicleCompare = useSelector((state) => state.vehicleCompare)
  const {
    loading: loadingCompare,
    error: errorCompare,
    vehicles: vehiclesCompare,
  } = vehicleCompare

  const [leftVehicleId, setLeftVehicleId] = useState('')
  const [rightVehicleId, setRightVehicleId] = useState('')

  // const [leftVehicle, setLeftVehicle] = useState({})
  // const [rightVehicle, setRightVehicle] = useState({})

  const leftSelectChange = (e) => {
    setLeftVehicleId(e.target.value)
  }

  const rightSelectChange = (e) => {
    setRightVehicleId(e.target.value)
  }

  const compareHandler = () => {
    if (!leftVehicleId || !rightVehicleId) {
      setCompareError(true)
      return
    }
    dispatch(listCompareVehiclesDetails(leftVehicleId, rightVehicleId))
  }

  useEffect(() => {
    if (vehicles.length === 0) {
      dispatch(listVehicles())
    }

    // if (vehiclesCompare && vehiclesCompare.length !== 0) {
    //   setLeftVehicle({ ...vehiclesCompare[0] })
    //   setRightVehicle({ ...vehiclesCompare[1] })
    // }
  }, [dispatch, vehicles.length])

  return (
    <CompareContainer>
      {loading && <LoaderMin />}
      {error && <Message variant="error">{error}</Message>}
      {loadingCompare && <LoaderMin />}
      {errorCompare && <Message variant="error">{errorCompare}</Message>}
      {compareError && (
        <Message variant="error">
          Please select two vehicles that you want to compare
        </Message>
      )}
      <Header>
        <H1>Compare two vehicle</H1>
        <Hr width="100%" />
      </Header>
      <CompareWrapper>
        <Table>
          <Tbody>
            <TR>
              <TD colSpan={3}>
                <Select
                  defaultValue={'DEFAULT'}
                  onChange={leftSelectChange}
                  required
                >
                  <option value="DEFAULT" disabled>
                    Choose Model *
                  </option>
                  {vehicles.map((v, index) => (
                    <option key={index} value={v._id}>
                      {v.name}
                    </option>
                  ))}
                </Select>
                <Select
                  defaultValue={'DEFAULT'}
                  onChange={rightSelectChange}
                  required
                >
                  <option value="DEFAULT" disabled>
                    Choose Model *
                  </option>
                  {vehicles.map((v, index) => (
                    <option key={index} value={v._id}>
                      {v.name}
                    </option>
                  ))}
                </Select>
                <Button
                  to="#"
                  onClick={compareHandler}
                  // disabled={!leftVehicleId || !rightVehicleId}
                >
                  Compare
                </Button>
              </TD>
            </TR>
            {vehiclesCompare.length !== 0 && (
              <>
                <TR>
                  <TH className="header"></TH>
                  <TH className="header">{vehiclesCompare[0].name} Engine</TH>
                  <TH className="header">{vehiclesCompare[1].name} Engine</TH>
                </TR>
                <TR>
                  <TD>Type</TD>
                  <TD>{vehiclesCompare[0].specifications.engine.type}</TD>
                  <TD>{vehiclesCompare[1].specifications.engine.type}</TD>
                </TR>
                <TR>
                  <TD>Displacement</TD>
                  <TD>
                    {
                      vehiclesCompare[0].specifications.engine
                        .engineDisplacement
                    }
                  </TD>
                  <TD>
                    {
                      vehiclesCompare[1].specifications.engine
                        .engineDisplacement
                    }
                  </TD>
                </TR>
                <TR>
                  <TD>Max Power</TD>
                  <TD>{vehiclesCompare[0].specifications.engine.maxPower}</TD>
                  <TD>{vehiclesCompare[1].specifications.engine.maxPower}</TD>
                </TR>
                <TR>
                  <TD>Max Torque</TD>
                  <TD>{vehiclesCompare[0].specifications.engine.maxTorque}</TD>
                  <TD>{vehiclesCompare[1].specifications.engine.maxTorque}</TD>
                </TR>
                <TR>
                  <TH className="header"></TH>
                  <TH className="header">
                    {vehiclesCompare[0].name} Transmission
                  </TH>
                  <TH className="header">
                    {vehiclesCompare[1].name} Transmission
                  </TH>
                </TR>
                <TR>
                  <TD>Drive Type</TD>
                  <TD>
                    {vehiclesCompare[0].specifications.transmission.driveType}
                  </TD>
                  <TD>
                    {vehiclesCompare[1].specifications.transmission.driveType}
                  </TD>
                </TR>
                <TR>
                  <TD>Number Of Speeds</TD>
                  <TD>
                    {
                      vehiclesCompare[0].specifications.transmission
                        .numberOfSpeeds
                    }
                  </TD>
                  <TD>
                    {
                      vehiclesCompare[1].specifications.transmission
                        .numberOfSpeeds
                    }
                  </TD>
                </TR>
                <TR>
                  <TD>Shift Type</TD>
                  <TD>
                    {vehiclesCompare[0].specifications.transmission.shiftType}
                  </TD>
                  <TD>
                    {vehiclesCompare[1].specifications.transmission.shiftType}
                  </TD>
                </TR>
                <TR>
                  <TH className="header"></TH>
                  <TH className="header">
                    {vehiclesCompare[0].name} Suspension
                  </TH>
                  <TH className="header">
                    {vehiclesCompare[1].name} Suspension
                  </TH>
                </TR>
                <TR>
                  <TD>Front</TD>
                  <TD>{vehiclesCompare[0].specifications.suspension.front}</TD>
                  <TD>{vehiclesCompare[1].specifications.suspension.front}</TD>
                </TR>
                <TR>
                  <TD>Shift Type</TD>
                  <TD>{vehiclesCompare[0].specifications.suspension.rear}</TD>
                  <TD>{vehiclesCompare[1].specifications.suspension.rear}</TD>
                </TR>
                <TR>
                  <TH className="header"></TH>
                  <TH className="header">{vehiclesCompare[0].name} Wheel</TH>
                  <TH className="header">{vehiclesCompare[1].name} Wheel</TH>
                </TR>
                <TR>
                  <TD>Tyre Size</TD>
                  <TD>{vehiclesCompare[0].specifications.wheel.tyre.size}</TD>
                  <TD>{vehiclesCompare[1].specifications.wheel.tyre.size}</TD>
                </TR>
                <TR>
                  <TD>Tyre Type</TD>
                  <TD>{vehiclesCompare[0].specifications.wheel.tyre.type}</TD>
                  <TD>{vehiclesCompare[1].specifications.wheel.tyre.type}</TD>
                </TR>
                <TR>
                  <TD>Rim Type</TD>
                  <TD>{vehiclesCompare[0].specifications.wheel.rimType}</TD>
                  <TD>{vehiclesCompare[1].specifications.wheel.rimType}</TD>
                </TR>
                <TR>
                  <TH className="header"></TH>
                  <TH className="header">{vehiclesCompare[0].name} Brakes</TH>
                  <TH className="header">{vehiclesCompare[1].name} Brakes</TH>
                </TR>
                <TR>
                  <TD>Front Brake Type</TD>
                  <TD>
                    {vehiclesCompare[0].specifications.brakes.frontBrakeType}
                  </TD>
                  <TD>
                    {vehiclesCompare[1].specifications.brakes.frontBrakeType}
                  </TD>
                </TR>
                <TR>
                  <TD>Rear Brake Type</TD>
                  <TD>
                    {vehiclesCompare[0].specifications.brakes.rearBrakeType}
                  </TD>
                  <TD>
                    {vehiclesCompare[1].specifications.brakes.rearBrakeType}
                  </TD>
                </TR>
                <TR>
                  <TH className="header"></TH>
                  <TH className="header">{vehiclesCompare[0].name} Steering</TH>
                  <TH className="header">{vehiclesCompare[1].name} Steering</TH>
                </TR>
                <TR>
                  <TD>Steering Type</TD>
                  <TD>
                    {vehiclesCompare[0].specifications.steering.steeringType}
                  </TD>
                  <TD>
                    {vehiclesCompare[1].specifications.steering.steeringType}
                  </TD>
                </TR>
                <TR>
                  <TH className="header"></TH>
                  <TH className="header">
                    {vehiclesCompare[0].name} Dimensions
                  </TH>
                  <TH className="header">
                    {vehiclesCompare[1].name} Dimensions
                  </TH>
                </TR>
                <TR>
                  <TD>Overall Vehicle (LxWxH)</TD>
                  <TD>{`${vehiclesCompare[0].specifications.dimensions.overallVehicle.length.value} ${vehiclesCompare[0].specifications.dimensions.overallVehicle.length.unit} x ${vehiclesCompare[0].specifications.dimensions.overallVehicle.breadth.value} ${vehiclesCompare[0].specifications.dimensions.overallVehicle.breadth.unit} x ${vehiclesCompare[0].specifications.dimensions.overallVehicle.height.value} ${vehiclesCompare[0].specifications.dimensions.overallVehicle.height.unit}`}</TD>
                  <TD>{`${vehiclesCompare[1].specifications.dimensions.overallVehicle.length.value} ${vehiclesCompare[1].specifications.dimensions.overallVehicle.length.unit} x ${vehiclesCompare[1].specifications.dimensions.overallVehicle.breadth.value} ${vehiclesCompare[1].specifications.dimensions.overallVehicle.breadth.unit} x ${vehiclesCompare[1].specifications.dimensions.overallVehicle.height.value} ${vehiclesCompare[1].specifications.dimensions.overallVehicle.height.unit}`}</TD>
                </TR>
                <TR>
                  <TD>Deck Inner (LxWxH)</TD>
                  <TD>{`${vehiclesCompare[0].specifications.dimensions.deckInner.length.value} ${vehiclesCompare[0].specifications.dimensions.deckInner.length.unit} x ${vehiclesCompare[0].specifications.dimensions.deckInner.breadth.value} ${vehiclesCompare[0].specifications.dimensions.deckInner.breadth.unit} x ${vehiclesCompare[0].specifications.dimensions.deckInner.height.value} ${vehiclesCompare[0].specifications.dimensions.deckInner.height.unit}`}</TD>
                  <TD>{`${vehiclesCompare[1].specifications.dimensions.deckInner.length.value} ${vehiclesCompare[1].specifications.dimensions.deckInner.length.unit} x ${vehiclesCompare[1].specifications.dimensions.deckInner.breadth.value} ${vehiclesCompare[1].specifications.dimensions.deckInner.breadth.unit} x ${vehiclesCompare[1].specifications.dimensions.deckInner.height.value} ${vehiclesCompare[1].specifications.dimensions.deckInner.height.unit}`}</TD>
                </TR>
                <TR>
                  <TD>Wheelbase</TD>
                  <TD>{`${vehiclesCompare[0].specifications.dimensions.wheelbase.value} ${vehiclesCompare[0].specifications.dimensions.wheelbase.unit}`}</TD>
                  <TD>{`${vehiclesCompare[1].specifications.dimensions.wheelbase.value} ${vehiclesCompare[1].specifications.dimensions.wheelbase.unit}`}</TD>
                </TR>
                <TR>
                  <TD>Turning Circle Radius</TD>
                  <TD>{`${vehiclesCompare[0].specifications.dimensions.turningCircleRadius.value} ${vehiclesCompare[0].specifications.dimensions.turningCircleRadius.unit}`}</TD>
                  <TD>{`${vehiclesCompare[1].specifications.dimensions.turningCircleRadius.value} ${vehiclesCompare[1].specifications.dimensions.turningCircleRadius.unit}`}</TD>
                </TR>
                <TR>
                  <TD>Ground Clearance</TD>
                  <TD>{`${vehiclesCompare[0].specifications.dimensions.groundClearance.value} ${vehiclesCompare[0].specifications.dimensions.groundClearance.unit}`}</TD>
                  <TD>{`${vehiclesCompare[1].specifications.dimensions.groundClearance.value} ${vehiclesCompare[1].specifications.dimensions.groundClearance.unit}`}</TD>
                </TR>
                <TR>
                  <TH className="header"></TH>
                  <TH className="header">{vehiclesCompare[0].name} Capacity</TH>
                  <TH className="header">{vehiclesCompare[1].name} Capacity</TH>
                </TR>
                <TR>
                  <TD>Deck Carrying Capacity</TD>
                  <TD>{`${vehiclesCompare[0].specifications.capacity.deckCarryingCapacity.value} ${vehiclesCompare[0].specifications.capacity.deckCarryingCapacity.unit} `}</TD>
                  <TD>{`${vehiclesCompare[1].specifications.capacity.deckCarryingCapacity.value} ${vehiclesCompare[1].specifications.capacity.deckCarryingCapacity.unit} `}</TD>
                </TR>
                <TR>
                  <TD>Kerb Weight</TD>
                  <TD>{`${vehiclesCompare[0].specifications.capacity.kerbWeight.value} ${vehiclesCompare[0].specifications.capacity.kerbWeight.unit}`}</TD>
                  <TD>{`${vehiclesCompare[1].specifications.capacity.kerbWeight.value} ${vehiclesCompare[1].specifications.capacity.kerbWeight.unit}`}</TD>
                </TR>
                <TR>
                  <TD>Total Seating Capacity</TD>
                  <TD>{`${vehiclesCompare[0].specifications.capacity.totalSeatingCapacity.value}`}</TD>
                  <TD>{`${vehiclesCompare[1].specifications.capacity.totalSeatingCapacity.value}`}</TD>
                </TR>
                <TR>
                  <TD>Fuel Tank</TD>
                  <TD>{`${vehiclesCompare[0].specifications.capacity.fuelTank.value} ${vehiclesCompare[0].specifications.capacity.fuelTank.unit}`}</TD>
                  <TD>{`${vehiclesCompare[1].specifications.capacity.fuelTank.value} ${vehiclesCompare[1].specifications.capacity.fuelTank.unit}`}</TD>
                </TR>
                <TR>
                  <TH className="header"></TH>
                  <TH className="header">
                    {vehiclesCompare[0].name} Comfort & Convenience
                  </TH>
                  <TH className="header">
                    {vehiclesCompare[1].name} Comfort & Convenience
                  </TH>
                </TR>
                <TR>
                  <TD></TD>
                  <TD>
                    <ol style={{ listStyleType: 'none' }}>
                      {vehiclesCompare[0].comfortAndConvinience.map(
                        (item, index) => (
                          <li style={{ padding: '1rem 0' }} key={index}>
                            {item}
                          </li>
                        )
                      )}
                    </ol>
                  </TD>
                  <TD>
                    <ol style={{ listStyleType: 'none' }}>
                      {vehiclesCompare[1].comfortAndConvinience.map(
                        (item, index) => (
                          <li style={{ padding: '1rem 0' }} key={index}>
                            {item}
                          </li>
                        )
                      )}
                    </ol>
                  </TD>
                </TR>
                <TR>
                  <TH className="header"></TH>
                  <TH className="header">
                    {vehiclesCompare[0].name} Safety & Security
                  </TH>
                  <TH className="header">
                    {vehiclesCompare[1].name} Safety & Security
                  </TH>
                </TR>
                <TR>
                  <TD></TD>
                  <TD>
                    <ol style={{ listStyleType: 'none' }}>
                      {vehiclesCompare[0].safetyAndSecurity.map(
                        (item, index) => (
                          <li style={{ padding: '1rem 0' }} key={index}>
                            {item}
                          </li>
                        )
                      )}
                    </ol>
                  </TD>
                  <TD>
                    <ol style={{ listStyleType: 'none' }}>
                      {vehiclesCompare[1].safetyAndSecurity.map(
                        (item, index) => (
                          <li style={{ padding: '1rem 0' }} key={index}>
                            {item}
                          </li>
                        )
                      )}
                    </ol>
                  </TD>
                </TR>
              </>
            )}
          </Tbody>
        </Table>
      </CompareWrapper>
    </CompareContainer>
  )
}

export default Compare
