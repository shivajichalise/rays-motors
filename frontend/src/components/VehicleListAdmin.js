import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './Header'
import Message from './Message'
import LoaderMin from './LoaderMin'
import styled, { css } from 'styled-components/macro'
import { isuzuTheme } from '../styles/theme'
import {
  listVehicles,
  deleteVehicle,
  createVehicle,
} from '../actions/vehicleActions'
import { VEHICLE_CREATE_RESET } from '../constants/vehicleConstants'
import { AiFillDelete } from 'react-icons/ai'
import { RiEditBoxFill } from 'react-icons/ri'
import { ButtonLink as Button } from '../components/Button'

const VehicleListAdminContainer = styled.div`
  // background: #f00;
  display: flex;
  justify-content: center;
  align-items: center;
`

const VehicleListAdminWrapper = styled.div`
  // background: #0f0;
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

const TD = styled.td`
  padding: 15px;
  background-color: ${isuzuTheme.card};
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

const OptionCss = css`
  margin: 0 0.5rem 0 0.5rem;

  &:hover {
    transform: scale(1.5);
  }
`

const Option = styled(Link)``

const Edit = styled(RiEditBoxFill)`
  color: ${isuzuTheme.lightGreen};
  ${OptionCss}
`

const Delete = styled(AiFillDelete)`
  color: ${isuzuTheme.red};
  ${OptionCss}
`

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const VehicleListAdmin = ({ history, match }) => {
  const dispatch = useDispatch()

  const vehicleList = useSelector((state) => state.vehicleList)
  const { loading, error, vehicles } = vehicleList

  const vehicleDelete = useSelector((state) => state.vehicleDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = vehicleDelete

  const vehicleCreate = useSelector((state) => state.vehicleCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    vehicle: createdVehicle,
  } = vehicleCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure that you want to delete the vehicle ?')) {
      dispatch(deleteVehicle(id))
    }
  }

  const addVehicleHandler = () => {
    dispatch(createVehicle())
  }

  useEffect(() => {
    dispatch({ type: VEHICLE_CREATE_RESET })
    if (!userInfo.isAdmin) {
      history.push('/profile')
    }
    if (successCreate) {
      history.push(`/admin/vehicle/${createdVehicle._id}/edit`)
    } else {
      dispatch(listVehicles())
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdVehicle,
  ])

  return (
    <>
      <Header />
      <Div>
        <h1 style={{ marginLeft: '10px' }}>VEHICLES</h1>
        <Button primary="primary" to="#" onClick={addVehicleHandler}>
          + Create Vehicle
        </Button>
      </Div>
      <VehicleListAdminContainer>
        <VehicleListAdminWrapper>
          {loadingCreate && <LoaderMin />}
          {errorCreate && <Message variant="error">{errorCreate}</Message>}
          {loadingDelete && <LoaderMin />}
          {errorDelete && <Message variant="error">{errorDelete}</Message>}
          {loading ? (
            <LoaderMin />
          ) : error ? (
            <Message variant="error">{error}</Message>
          ) : (
            <TableWrapper>
              <TableTag>
                <TBODY>
                  <TR>
                    <TH className="header" colSpan={5}>
                      Vehicles
                    </TH>
                  </TR>
                  <TR>
                    <TH className="header">ID</TH>
                    <TH className="header">NAME</TH>
                    <TH className="header">Slug</TH>
                    <TH className="header">OPTIONS</TH>
                  </TR>
                  {vehicles.map((vehicle) => (
                    <TR key={vehicle._id}>
                      <TD>{vehicle._id}</TD>
                      <TD>{vehicle.name}</TD>
                      <TD>{vehicle.slug}</TD>
                      <TD>
                        <Option to={`/admin/vehicle/${vehicle._id}/edit`}>
                          <Edit />
                        </Option>
                        <Option
                          to="#"
                          onClick={() => {
                            deleteHandler(vehicle._id)
                          }}
                        >
                          <Delete />
                        </Option>
                      </TD>
                    </TR>
                  ))}
                </TBODY>
              </TableTag>
            </TableWrapper>
          )}
        </VehicleListAdminWrapper>
      </VehicleListAdminContainer>
    </>
  )
}

export default VehicleListAdmin
