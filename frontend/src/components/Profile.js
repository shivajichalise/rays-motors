import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Header from './Header'
import Message from './Message'
import LoaderMin from './LoaderMin'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { isuzuTheme } from '../styles/theme'

const ProfileContainer = styled.div`
  // background: #f00;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ProfileWrapper = styled.div`
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

const Profile = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  return (
    <>
      <Header />
      <ProfileContainer>
        {message && <Message variant="alert">{message}</Message>}
        {error && <Message variant="error">{error}</Message>}
        {success && <Message variant="success">Profile Updated</Message>}
        {loading && <LoaderMin />}
        <ProfileWrapper>
          <Form onSubmit={submitHandler}>
            <FormH1>User Profile</FormH1>
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
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
            <FormInput
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FormButton type="submit">Update</FormButton>
          </Form>
        </ProfileWrapper>
      </ProfileContainer>
    </>
  )
}

export default Profile
