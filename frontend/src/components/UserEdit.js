import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Header from './Header'
import Message from './Message'
import LoaderMin from './LoaderMin'
import { getUserDetails, updateUser } from '../actions/userActions'
import { USER_UPDATE_RESET } from '../constants/userConstants'
import { isuzuTheme } from '../styles/theme'
import { ButtonLink } from '../components/Button'

const UserEditContainer = styled.div`
  // background: #f00;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const UserEditWrapper = styled.div`
  // background: #0f0;
  background: ${isuzuTheme.card};
  color: ${isuzuTheme.text};

  @media screen and (max-width: 768px) {
    width: 75%;
  }
`

const Form = styled.form`
  display: grid;
  padding: 5px 20px 40px 20px;
`

const FormH1 = styled.h1`
  margin: 20px 0 40px 0;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.4rem;
`

const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
`

const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 28px;
  border: none;
  border-radius: 4px;
  width: 100%;
`
const FormButton = styled.button`
  background: ${isuzuTheme.red};
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`

const UserEdit = ({ match, history }) => {
  const userId = match.params.id

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userUpdate = useSelector((state) => state.userUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET })
      history.push('/admin/userlist')
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    }
  }, [dispatch, userId, user, successUpdate, history])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateUser({ _id: userId, name, email, isAdmin }))
  }

  return (
    <>
      <Header />
      <ButtonLink to="/admin/userlist" primary="primary">
        Go Back
      </ButtonLink>
      <UserEditContainer>
        {loadingUpdate && <LoaderMin />}
        {errorUpdate && <Message variant="error">{errorUpdate}</Message>}
        {loading ? (
          <LoaderMin />
        ) : error ? (
          <Message variant="error">{error}</Message>
        ) : (
          <UserEditWrapper>
            <Form onSubmit={submitHandler}>
              <FormH1>Edit User</FormH1>
              <FormLabel htmlFor="fullName">Full Name</FormLabel>
              <FormInput
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormLabel htmlFor="isadmin">Is Admin ?</FormLabel>
              <input
                type="checkbox"
                style={{ marginBottom: '10px' }}
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
              <FormButton type="submit">Update User</FormButton>
            </Form>
          </UserEditWrapper>
        )}
      </UserEditContainer>
    </>
  )
}

export default UserEdit
