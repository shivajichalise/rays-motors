import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Header from './Header'
import Message from './Message'
import LoaderMin from './LoaderMin'
import { login } from '../actions/userActions'
import { isuzuTheme } from '../styles/theme'

const LoginContainer = styled.div`
  // background: #f00;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const LoginWrapper = styled.div`
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

const Text = styled.span`
  text-align: center;
  color: ${isuzuTheme.text};
  margin: 15px 0 0 0;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.1rem;
`

const Anchor = styled(Link)``

const Login = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/profile'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <>
      <Header />
      <LoginContainer>
        {error && <Message variant="error">{error}</Message>}
        {loading && <LoaderMin />}
        <LoginWrapper>
          <Form onSubmit={submitHandler}>
            <FormH1>Sign In</FormH1>
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
              required
            />
            <FormButton type="submit">Send</FormButton>
            <Text>
              New ? <Anchor to="/register">Sign up</Anchor>{' '}
            </Text>
          </Form>
        </LoginWrapper>
      </LoginContainer>
    </>
  )
}

export default Login
