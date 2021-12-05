import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, { css } from 'styled-components/macro'
import { isuzuTheme } from '../styles/theme'
import { listVehicleDetails, updateVehicle } from '../actions/vehicleActions'
import Message from './Message'
import LoaderMin from './LoaderMin'
import Header from './Header'
import { ButtonLink } from './Button'
import { VEHICLE_UPDATE_RESET } from '../constants/vehicleConstants'

const VehicleEditContainer = styled.div`
  // background: #f00;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const VehicleEditWrapper = styled.div`
  // background: #0f0;
  max-width: 95%;
  overflow: hidden;
`

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TableTag = styled.table`
  padding: 1rem 0 2rem 0;
`

const TBODY = styled.tbody``

const TDStyle = css`
  padding: 15px;
  background-color: ${isuzuTheme.extraLightRed};
`
const TD = styled.td`
  ${TDStyle}
`

const TDMultiple = styled.td`
  ${TDStyle}
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto auto;
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
const Form = styled.form``

const FormInput = styled.input`
  padding: 10px 10px;
  border: none;
  border-radius: 4px;
  width: 600px;
`

const FormButton = styled.button`
  background: ${isuzuTheme.red};
  padding: 13px 10px;
  float: right;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
`

const FormInputSmall = styled.input`
  padding: 10px 10px;
  border: none;
  border-radius: 4px;
  width: 190px;
`
const TextArea = styled.textarea`
  padding: 16px 16px;
  border: none;
  border-radius: 4px;
  width: 100%;
  min-height: 100px;
  resize: none;
`

const VehicleEdit = ({ match, history }) => {
  const vehicleId = match.params.id

  const [vehicleBasic, setVehicleBasic] = useState({
    name: '',
    slug: '',
    slogan: '',
    description: '',
    image: {
      banner: '',
      portrait: '',
    },
  })

  const [vehicleEngine, setVehicleEngine] = useState({
    type: '',
    engineDisplacement: '',
    maxPower: '',
    maxTorque: '',
  })

  const [vehicleTransmission, setVehicleTransmission] = useState({
    driveType: '',
    numberOfSpeeds: '',
    shiftType: '',
  })

  const [vehicleSuspension, setVehicleSuspension] = useState({
    front: '',
    rear: '',
  })

  const [vehicleWheel, setVehicleWheel] = useState({
    tyre: {
      size: '',
      type: '',
    },
    rimType: '',
  })

  const [vehicleBrakes, setVehicleBrakes] = useState({
    frontBrakeType: '',
    rearBrakeType: '',
  })

  const [vehicleSteering, setVehicleSteering] = useState({
    steeringType: '',
  })

  const [overallVehicleDimension, setOverallVehicleDimension] = useState({
    length: {
      value: 0,
      unit: 'mm',
    },
    breadth: {
      value: 0,
      unit: 'mm',
    },
    height: {
      value: 0,
      unit: 'mm',
    },
  })

  const [vehicleDeckInnerDimension, setVehicleDeckInnerDimension] = useState({
    length: {
      value: 0,
      unit: 'mm',
    },
    breadth: {
      value: 0,
      unit: 'mm',
    },
    height: {
      value: 0,
      unit: 'mm',
    },
  })

  const [vehicleDimensions, setVehicleDimensions] = useState({
    wheelbase: {
      value: 0,
      unit: 'mm',
    },
    turningCircleRadius: {
      value: 0,
      unit: 'm',
    },
    groundClearance: {
      value: 0,
      unit: 'mm',
    },
  })

  const [vehicleCapacity, setVehicleCapacity] = useState({
    deckCarryingCapacity: {
      value: 0,
      unit: 'kg',
    },
    kerbWeight: {
      value: 0,
      unit: 'kg',
    },
    fuelTank: {
      value: 0,
      unit: 'L',
    },
    totalSeatingCapacity: 0,
  })

  const [comfortAndConvinience, setComfortAndConvinience] = useState([''])
  const [safetyAndSecurity, setSafetyAndSecurity] = useState([''])

  // const [vehicleInfo, setVehicleInfo] = useState({})

  const dispatch = useDispatch()

  const vehicleDetails = useSelector((state) => state.vehicleDetails)
  const { loading, error, vehicle } = vehicleDetails

  const vehicleUpdate = useSelector((state) => state.vehicleUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = vehicleUpdate

  const createSafetyArray = (value) => {
    setSafetyAndSecurity(value.split(','))
  }

  const createComfortArray = (value) => {
    setComfortAndConvinience(value.split(','))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateVehicle({
        _id: vehicleId,
        ...vehicleBasic,
        specifications: {
          engine: {
            ...vehicleEngine,
          },
          transmission: {
            ...vehicleTransmission,
          },
          suspension: {
            ...vehicleSuspension,
          },
          wheel: {
            ...vehicleWheel,
          },
          brakes: {
            ...vehicleBrakes,
          },
          steering: {
            ...vehicleSteering,
          },
          dimensions: {
            ...vehicleDimensions,
            overallVehicle: {
              ...overallVehicleDimension,
            },
            deckInner: {
              ...vehicleDeckInnerDimension,
            },
          },
          capacity: {
            ...vehicleCapacity,
          },
        },
        comfortAndConvinience,
        safetyAndSecurity,
      })
    )
  }

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: VEHICLE_UPDATE_RESET })
      history.push('/admin/vehiclelist')
    } else {
      if (!vehicle.name || vehicle._id !== vehicleId) {
        dispatch(listVehicleDetails(vehicleId))
      } else {
        const {
          name,
          slug,
          slogan,
          description,
          image,
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
        } = vehicle

        setVehicleBasic({
          name: name,
          slug: slug,
          slogan: slogan,
          description: description,
          image: {
            banner: image.banner,
            portrait: image.portrait,
          },
        })

        setVehicleEngine({
          type: engine.type,
          engineDisplacement: engine.engineDisplacement,
          maxPower: engine.maxPower,
          maxTorque: engine.maxTorque,
        })

        setVehicleTransmission({
          driveType: transmission.driveType,
          numberOfSpeeds: transmission.numberOfSpeeds,
          shiftType: transmission.shiftType,
        })

        setVehicleSuspension({
          front: suspension.front,
          rear: suspension.rear,
        })

        setVehicleWheel({
          tyre: {
            size: wheel.tyre.size,
            type: wheel.tyre.type,
          },
          rimType: wheel.rimType,
        })

        setVehicleBrakes({
          frontBrakeType: brakes.frontBrakeType,
          rearBrakeType: brakes.rearBrakeType,
        })

        setVehicleSteering({
          steeringType: steering.steeringType,
        })

        setOverallVehicleDimension({
          length: {
            value: overallVehicle.length.value,
            unit: 'mm',
          },
          breadth: {
            value: overallVehicle.breadth.value,
            unit: 'mm',
          },
          height: {
            value: overallVehicle.height.value,
            unit: 'mm',
          },
        })

        setVehicleDeckInnerDimension({
          length: {
            value: deckInner.length.value,
            unit: 'mm',
          },
          breadth: {
            value: deckInner.breadth.value,
            unit: 'mm',
          },
          height: {
            value: deckInner.height.value,
            unit: 'mm',
          },
        })

        setVehicleDimensions({
          wheelbase: {
            value: wheelbase.value,
            unit: 'mm',
          },
          turningCircleRadius: {
            value: turningCircleRadius.value,
            unit: 'm',
          },
          groundClearance: {
            value: groundClearance.value,
            unit: 'mm',
          },
        })

        setVehicleCapacity({
          deckCarryingCapacity: {
            value: deckCarryingCapacity.value,
            unit: 'kg',
          },
          kerbWeight: {
            value: kerbWeight.value,
            unit: 'kg',
          },
          totalSeatingCapacity,
          fuelTank: {
            value: fuelTank.value,
            unit: 'L',
          },
        })

        setComfortAndConvinience(comfortAndConvinience)
        setSafetyAndSecurity(safetyAndSecurity)
      }
    }
  }, [dispatch, vehicleId, vehicle, successUpdate, history])

  return (
    <>
      <Header />
      <ButtonLink to="/admin/vehiclelist" primary="primary">
        Go Back
      </ButtonLink>
      <VehicleEditContainer>
        {loadingUpdate && <LoaderMin />}
        {errorUpdate && <Message variant="error">{errorUpdate}</Message>}
        {loading ? (
          <LoaderMin />
        ) : error ? (
          <Message variant="error">{error}</Message>
        ) : (
          <VehicleEditWrapper>
            <Form onSubmit={submitHandler}>
              <TableWrapper>
                <TableTag>
                  <TBODY>
                    <TR>
                      <TH className="header" colSpan={2}>
                        Basic Information
                      </TH>
                    </TR>
                    <TR>
                      <TD>Name</TD>
                      <TD>
                        <FormInput
                          type="text"
                          onChange={(e) => {
                            setVehicleBasic({
                              ...vehicleBasic,
                              name: e.target.value,
                            })
                          }}
                          value={vehicleBasic.name}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TD>Slug</TD>
                      <TD>
                        <FormInput
                          type="text"
                          onChange={(e) => {
                            setVehicleBasic({
                              ...vehicleBasic,
                              slug: e.target.value,
                            })
                          }}
                          value={vehicleBasic.slug}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TD>Slogan</TD>
                      <TD>
                        <FormInput
                          type="text"
                          onChange={(e) => {
                            setVehicleBasic({
                              ...vehicleBasic,
                              slogan: e.target.value,
                            })
                          }}
                          value={vehicleBasic.slogan}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TD>Description</TD>
                      <TD>
                        <TextArea
                          onChange={(e) => {
                            setVehicleBasic({
                              ...vehicleBasic,
                              description: e.target.value,
                            })
                          }}
                          value={vehicleBasic.description}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TH className="header" colSpan={2}>
                        Image
                      </TH>
                    </TR>
                    <TR>
                      <TD>Banner</TD>
                      <TD>
                        <FormInput
                          type="text"
                          onChange={(e) => {
                            setVehicleBasic({
                              ...vehicleBasic,
                              image: {
                                ...vehicleBasic.image,
                                banner: e.target.value,
                              },
                            })
                          }}
                          value={vehicleBasic.image.banner}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TD>Portrait</TD>
                      <TD>
                        <FormInput
                          type="text"
                          onChange={(e) => {
                            setVehicleBasic({
                              ...vehicleBasic,
                              image: {
                                ...vehicleBasic.image,
                                portrait: e.target.value,
                              },
                            })
                          }}
                          value={vehicleBasic.image.portrait}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TH className="header" colSpan={2}>
                        Engine
                      </TH>
                    </TR>
                    <TR>
                      <TD>Type</TD>
                      <TD>
                        <FormInput
                          type="text"
                          onChange={(e) => {
                            setVehicleEngine({
                              ...vehicleEngine,
                              type: e.target.value,
                            })
                          }}
                          value={vehicleEngine.type}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TD>Displacement</TD>
                      <TD>
                        <FormInput
                          type="text"
                          value={vehicleEngine.engineDisplacement}
                          onChange={(e) => {
                            setVehicleEngine({
                              ...vehicleEngine,
                              engineDisplacement: e.target.value,
                            })
                          }}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TD>Max Power</TD>
                      <TD>
                        <FormInput
                          type="text"
                          value={vehicleEngine.maxPower}
                          onChange={(e) => {
                            setVehicleEngine({
                              ...vehicleEngine,
                              maxPower: e.target.value,
                            })
                          }}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TD>Max Torque</TD>
                      <TD>
                        <FormInput
                          type="text"
                          value={vehicleEngine.maxTorque}
                          onChange={(e) => {
                            setVehicleEngine({
                              ...vehicleEngine,
                              maxTorque: e.target.value,
                            })
                          }}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TH className="header" colSpan={2}>
                        Transmission
                      </TH>
                    </TR>
                    <TR>
                      <TD>Drive Type</TD>
                      <TD>
                        <FormInput
                          type="text"
                          value={vehicleTransmission.driveType}
                          onChange={(e) => {
                            setVehicleTransmission({
                              ...vehicleTransmission,
                              driveType: e.target.value,
                            })
                          }}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TD>Number of Speeds</TD>
                      <TD>
                        <FormInput
                          type="text"
                          value={vehicleTransmission.numberOfSpeeds}
                          onChange={(e) => {
                            setVehicleTransmission({
                              ...vehicleTransmission,
                              numberOfSpeeds: e.target.value,
                            })
                          }}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TD>Shift Type</TD>
                      <TD>
                        <FormInput
                          type="text"
                          value={vehicleTransmission.shiftType}
                          onChange={(e) => {
                            setVehicleTransmission({
                              ...vehicleTransmission,
                              shiftType: e.target.value,
                            })
                          }}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TH className="header" colSpan={2}>
                        Suspension
                      </TH>
                    </TR>
                    <TR>
                      <TD>Front</TD>
                      <TD>
                        <FormInput
                          type="text"
                          value={vehicleSuspension.front}
                          onChange={(e) => {
                            setVehicleSuspension({
                              ...vehicleSuspension,
                              front: e.target.value,
                            })
                          }}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TD>Rear</TD>
                      <TD>
                        <FormInput
                          type="text"
                          onChange={(e) => {
                            setVehicleSuspension({
                              ...vehicleSuspension,
                              rear: e.target.value,
                            })
                          }}
                          value={vehicleSuspension.rear}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TH className="header" colSpan={2}>
                        Wheel
                      </TH>
                    </TR>
                    <TR>
                      <TD>Tyre Size</TD>
                      <TD>
                        <FormInput
                          type="text"
                          onChange={(e) => {
                            setVehicleWheel({
                              ...vehicleWheel,
                              tyre: {
                                ...vehicleWheel.tyre,
                                size: e.target.value,
                              },
                            })
                          }}
                          value={vehicleWheel.tyre.size}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TD>Tyre Type</TD>
                      <TD>
                        <FormInput
                          type="text"
                          onChange={(e) => {
                            setVehicleWheel({
                              ...vehicleWheel,
                              tyre: {
                                ...vehicleWheel.tyre,
                                type: e.target.value,
                              },
                            })
                          }}
                          value={vehicleWheel.tyre.type}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TD>Rim Type</TD>
                      <TD>
                        <FormInput
                          type="text"
                          onChange={(e) => {
                            setVehicleWheel({
                              ...vehicleWheel,
                              rimType: e.target.value,
                            })
                          }}
                          value={vehicleWheel.rimType}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TH className="header" colSpan={2}>
                        Brakes
                      </TH>
                    </TR>
                    <TR>
                      <TD>Front Brake Type</TD>
                      <TD>
                        <FormInput
                          type="text"
                          value={vehicleBrakes.frontBrakeType}
                          onChange={(e) => {
                            setVehicleBrakes({
                              ...vehicleBrakes,
                              frontBrakeType: e.target.value,
                            })
                          }}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TD>Rear Brake Type</TD>
                      <TD>
                        <FormInput
                          type="text"
                          value={vehicleBrakes.rearBrakeType}
                          onChange={(e) => {
                            setVehicleBrakes({
                              ...vehicleBrakes,
                              rearBrakeType: e.target.value,
                            })
                          }}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TH className="header" colSpan={2}>
                        Steering
                      </TH>
                    </TR>
                    <TR>
                      <TD>Steering Type</TD>
                      <TD>
                        <FormInput
                          type="text"
                          value={vehicleSteering.steeringType}
                          onChange={(e) => {
                            setVehicleSteering({
                              ...vehicleSteering,
                              steeringType: e.target.value,
                            })
                          }}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TH className="header" colSpan={2}>
                        Dimensions
                      </TH>
                    </TR>
                    <TR>
                      <TD>Overall Vehicle (LxWxH)</TD>
                      <TDMultiple>
                        <FormInputSmall
                          type="text"
                          value={overallVehicleDimension.length.value}
                          onChange={(e) => {
                            setOverallVehicleDimension({
                              ...overallVehicleDimension,
                              length: {
                                ...overallVehicleDimension.length,
                                value: e.target.value,
                              },
                            })
                          }}
                        />
                        <FormInputSmall
                          type="text"
                          value={overallVehicleDimension.breadth.value}
                          onChange={(e) => {
                            setOverallVehicleDimension({
                              ...overallVehicleDimension,
                              breadth: {
                                ...overallVehicleDimension.breadth,
                                value: e.target.value,
                              },
                            })
                          }}
                        />
                        <FormInputSmall
                          type="text"
                          value={overallVehicleDimension.height.value}
                          onChange={(e) => {
                            setOverallVehicleDimension({
                              ...overallVehicleDimension,
                              height: {
                                ...overallVehicleDimension.height,
                                value: e.target.value,
                              },
                            })
                          }}
                        />
                      </TDMultiple>
                    </TR>
                    <TR>
                      <TD>Deck Inner (LxWxH)</TD>
                      <TDMultiple>
                        <FormInputSmall
                          type="text"
                          value={vehicleDeckInnerDimension.length.value}
                          onChange={(e) => {
                            setVehicleDeckInnerDimension({
                              ...vehicleDeckInnerDimension,
                              length: {
                                ...vehicleDeckInnerDimension.length,
                                value: e.target.value,
                              },
                            })
                          }}
                        />
                        <FormInputSmall
                          type="text"
                          value={vehicleDeckInnerDimension.breadth.value}
                          onChange={(e) => {
                            setVehicleDeckInnerDimension({
                              ...vehicleDeckInnerDimension,
                              breadth: {
                                ...vehicleDeckInnerDimension.breadth,
                                value: e.target.value,
                              },
                            })
                          }}
                        />
                        <FormInputSmall
                          type="text"
                          value={vehicleDeckInnerDimension.height.value}
                          onChange={(e) => {
                            setVehicleDeckInnerDimension({
                              ...vehicleDeckInnerDimension,
                              height: {
                                ...vehicleDeckInnerDimension.height,
                                value: e.target.value,
                              },
                            })
                          }}
                        />
                      </TDMultiple>
                    </TR>
                    <TR>
                      <TD>Wheelbase</TD>
                      <TD>
                        <FormInput
                          type="text"
                          value={vehicleDimensions.wheelbase.value}
                          onChange={(e) => {
                            setVehicleDimensions({
                              ...vehicleDimensions,
                              wheelbase: {
                                ...vehicleDimensions.wheelbase,
                                value: e.target.value,
                              },
                            })
                          }}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TD>Turning Circle Radius</TD>
                      <TD>
                        <FormInput
                          type="text"
                          value={vehicleDimensions.turningCircleRadius.value}
                          onChange={(e) => {
                            setVehicleDimensions({
                              ...vehicleDimensions,
                              turningCircleRadius: {
                                ...vehicleDimensions.turningCircleRadius,
                                value: e.target.value,
                              },
                            })
                          }}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TD>Ground Clearance</TD>
                      <TD>
                        <FormInput
                          type="text"
                          value={vehicleDimensions.groundClearance.value}
                          onChange={(e) => {
                            setVehicleDimensions({
                              ...vehicleDimensions,
                              groundClearance: {
                                ...vehicleDimensions.groundClearance,
                                value: e.target.value,
                              },
                            })
                          }}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TH className="header" colSpan={2}>
                        Capacity
                      </TH>
                    </TR>
                    <TR>
                      <TD>Deck Carrying Capacity</TD>
                      <TD>
                        <FormInput
                          type="text"
                          value={vehicleCapacity.deckCarryingCapacity.value}
                          onChange={(e) => {
                            setVehicleCapacity({
                              ...vehicleCapacity,
                              deckCarryingCapacity: {
                                ...vehicleCapacity.deckCarryingCapacity,
                                value: e.target.value,
                              },
                            })
                          }}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TD>Kerb Weight</TD>
                      <TD>
                        <FormInput
                          type="text"
                          value={vehicleCapacity.kerbWeight.value}
                          onChange={(e) => {
                            setVehicleCapacity({
                              ...vehicleCapacity,
                              kerbWeight: {
                                ...vehicleCapacity.kerbWeight,
                                value: e.target.value,
                              },
                            })
                          }}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TD>Total Seating Capacity</TD>
                      <TD>
                        <FormInput
                          type="number"
                          value={vehicleCapacity.totalSeatingCapacity}
                          onChange={(e) => {
                            setVehicleCapacity({
                              ...vehicleCapacity,
                              totalSeatingCapacity: e.target.value,
                            })
                          }}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TD>Fuel Tank</TD>
                      <TD>
                        <FormInput
                          type="text"
                          value={vehicleCapacity.fuelTank.value}
                          onChange={(e) => {
                            setVehicleCapacity({
                              ...vehicleCapacity,
                              fuelTank: {
                                ...vehicleCapacity.fuelTank,
                                value: e.target.value,
                              },
                            })
                          }}
                        />
                      </TD>
                    </TR>
                    <TR>
                      <TH className="header" colSpan={2}>
                        Comfort and Convenience
                      </TH>
                    </TR>
                    <TR>
                      <TD colSpan={2}>
                        <TextArea
                          onChange={(e) => createComfortArray(e.target.value)}
                          value={comfortAndConvinience}
                        ></TextArea>
                      </TD>
                    </TR>
                    <TR>
                      <TH className="header" colSpan={2}>
                        Safety and Security
                      </TH>
                    </TR>
                    <TR>
                      <TD colSpan={2}>
                        <TextArea
                          onChange={(e) => createSafetyArray(e.target.value)}
                          value={safetyAndSecurity}
                        ></TextArea>
                      </TD>
                    </TR>
                    <TR>
                      <TD colSpan={2}>
                        <FormButton type="submit">Update Vehicle</FormButton>
                      </TD>
                    </TR>
                  </TBODY>
                </TableTag>
              </TableWrapper>
            </Form>
          </VehicleEditWrapper>
        )}
      </VehicleEditContainer>
    </>
  )
}

export default VehicleEdit
