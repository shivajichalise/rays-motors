import React from 'react'
import styled from 'styled-components'
import { isuzuTheme } from '../styles/theme'

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TableTag = styled.table`
  padding: 1rem 0 2rem 0;
`

const TBODY = styled.tbody``

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

const Table = ({ v }) => {
  const {
    specifications: {
      engine,
      transmission,
      suspension,
      wheel,
      brakes,
      steering,
      dimensions: {
        overallVehicle,
        wheelbase,
        deckInner,
        turningCircleRadius,
        groundClearance,
      },
      capacity: {
        deckCarryingCapacity,
        kerbWeight,
        totalSeatingCapacity,
        fuelTank,
      },
    },
    comfortAndConvinience,
    safetyAndSecurity,
  } = v
  return (
    <TableWrapper>
      <TableTag>
        <TBODY>
          <TR>
            <TH className="header" colSpan={2}>
              Engine
            </TH>
          </TR>
          <TR>
            <TD>Type</TD>
            <TD>{engine.type}</TD>
          </TR>
          <TR>
            <TD>Displacement</TD>
            <TD>{engine.engineDisplacement}</TD>
          </TR>
          <TR>
            <TD>Max Power</TD>
            <TD>{engine.maxPower}</TD>
          </TR>
          <TR>
            <TD>Max Torque</TD>
            <TD>{engine.maxTorque}</TD>
          </TR>
          <TR>
            <TH className="header" colSpan={2}>
              Transmission
            </TH>
          </TR>
          <TR>
            <TD>Drive Type</TD>
            <TD>{transmission.driveType}</TD>
          </TR>
          <TR>
            <TD>Number Of Speeds</TD>
            <TD>{transmission.numberOfSpeeds}</TD>
          </TR>
          <TR>
            <TD>Shift Type</TD>
            <TD>{transmission.shiftType}</TD>
          </TR>
          <TR>
            <TH className="header" colSpan={2}>
              Suspension
            </TH>
          </TR>
          <TR>
            <TD>Front</TD>
            <TD>{suspension.front}</TD>
          </TR>
          <TR>
            <TD>Shift Type</TD>
            <TD>{suspension.rear}</TD>
          </TR>
          <TR>
            <TH className="header" colSpan={2}>
              Wheel
            </TH>
          </TR>
          <TR>
            <TD>Tyre Size</TD>
            <TD>{wheel.tyre.size}</TD>
          </TR>
          <TR>
            <TD>Tyre Type</TD>
            <TD>{wheel.tyre.type}</TD>
          </TR>
          <TR>
            <TD>Tyre Type</TD>
            <TD>{wheel.tyre.type}</TD>
          </TR>
          <TR>
            <TH className="header" colSpan={2}>
              Brakes
            </TH>
          </TR>
          <TR>
            <TD>Front Brake Type</TD>
            <TD>{brakes.frontBrakeType}</TD>
          </TR>
          <TR>
            <TD>Rear Brake Type</TD>
            <TD>{brakes.rearBrakeType}</TD>
          </TR>
          <TR>
            <TH className="header" colSpan={2}>
              Steering
            </TH>
          </TR>
          <TR>
            <TD>Steering Type</TD>
            <TD>{steering.steeringType}</TD>
          </TR>
          <TR>
            <TH className="header" colSpan={2}>
              Dimensions
            </TH>
          </TR>
          <TR>
            <TD>Overall Vehicle (LxWxH)</TD>
            <TD>{`${overallVehicle.length.value} ${overallVehicle.length.unit} x ${overallVehicle.breadth.value} ${overallVehicle.breadth.unit} x ${overallVehicle.height.value} ${overallVehicle.height.unit}`}</TD>
          </TR>
          <TR>
            <TD>Deck Inner (LxWxH)</TD>
            <TD>{`${deckInner.length.value} ${deckInner.length.unit} x ${deckInner.breadth.value} ${deckInner.breadth.unit} x ${deckInner.height.value} ${deckInner.height.unit}`}</TD>
          </TR>
          <TR>
            <TD>Wheelbase</TD>
            <TD>{`${wheelbase.value} ${wheelbase.unit}`}</TD>
          </TR>
          <TR>
            <TD>Turning Circle Radius</TD>
            <TD>{`${turningCircleRadius.value} ${turningCircleRadius.unit}`}</TD>
          </TR>
          <TR>
            <TD>Ground Clearance</TD>
            <TD>{`${groundClearance.value} ${groundClearance.unit}`}</TD>
          </TR>
          <TR>
            <TH className="header" colSpan={2}>
              Capacity
            </TH>
          </TR>
          <TR>
            <TD>Deck Carrying Capacity</TD>
            <TD>{`${deckCarryingCapacity.value} ${deckCarryingCapacity.unit} `}</TD>
          </TR>
          <TR>
            <TD>Kerb Weight</TD>
            <TD>{`${kerbWeight.value} ${kerbWeight.unit}`}</TD>
          </TR>
          <TR>
            <TD>Total Seating Capacity</TD>
            <TD>{`${totalSeatingCapacity.value}`}</TD>
          </TR>
          <TR>
            <TD>Fuel Tank</TD>
            <TD>{`${fuelTank.value} ${fuelTank.unit}`}</TD>
          </TR>
          <TR>
            <TH className="header" colSpan={2}>
              Comfort and Convenience
            </TH>
          </TR>
          {comfortAndConvinience.map((item, index) => (
            <TR key={index}>
              <TD colSpan={2} style={{ textAlign: 'center' }}>
                {item}
              </TD>
            </TR>
          ))}
          <TR>
            <TH className="header" colSpan={2}>
              Safety and Security
            </TH>
          </TR>
          {safetyAndSecurity.map((item, index) => (
            <TR key={index}>
              <TD colSpan={2} style={{ textAlign: 'center' }}>
                {item}
              </TD>
            </TR>
          ))}
        </TBODY>
      </TableTag>
    </TableWrapper>
  )
}

export default Table
