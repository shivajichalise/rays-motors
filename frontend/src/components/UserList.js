import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './Header'
import Message from './Message'
import LoaderMin from './LoaderMin'
import styled, { css } from 'styled-components/macro'
import { isuzuTheme } from '../styles/theme'
import { listUsers, deleteUser } from '../actions/userActions'
import { AiFillDelete } from 'react-icons/ai'
import { RiEditBoxFill } from 'react-icons/ri'
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa'

const UserListContainer = styled.div`
  // background: #f00;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UserListWrapper = styled.div`
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

const Check = styled(FaCheckCircle)`
  color: ${isuzuTheme.green};
`

const Times = styled(FaTimesCircle)`
  color: ${isuzuTheme.red};
`

const UserList = ({ history }) => {
  const dispatch = useDispatch()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userDelete = useSelector((state) => state.userDelete)
  const { success: successDelete } = userDelete

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure that you want to delete the user ?')) {
      dispatch(deleteUser(id))
    }
  }

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers())
    } else {
      history.push('/profile')
    }
  }, [dispatch, history, userInfo, successDelete])

  return (
    <>
      <Header />
      <UserListContainer>
        <UserListWrapper>
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
                      USERS
                    </TH>
                  </TR>
                  <TR>
                    <TH className="header">ID</TH>
                    <TH className="header">NAME</TH>
                    <TH className="header">EMAIL</TH>
                    <TH className="header">ADMIN</TH>
                    <TH className="header">OPTIONS</TH>
                  </TR>
                  {users.map((user) => (
                    <TR key={user._id}>
                      <TD>{user._id}</TD>
                      <TD>{user.name}</TD>
                      <TD>{user.email}</TD>
                      <TD>{user.isAdmin ? <Check /> : <Times />}</TD>
                      <TD>
                        <Option to={`/admin/user/${user._id}/edit`}>
                          <Edit />
                        </Option>
                        <Option
                          to="#"
                          onClick={() => {
                            deleteHandler(user._id)
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
        </UserListWrapper>
      </UserListContainer>
    </>
  )
}

export default UserList
