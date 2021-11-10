import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { listVehicles } from '../actions/vehicleActions'
import Hr from './Hr'
import { isuzuTheme } from '../styles/theme'
import Loader from './Loader'

const QuoteContainer = styled.div`
  background: ${isuzuTheme.card};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const QuoteWrapper = styled.div`
  padding: 1rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div``

const H1 = styled.h1`
  color: ${isuzuTheme.text};
`

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  z-index: 1;
  display: grid;
  margin: 0;
  padding: 5px 20px 40px 20px;
`

const FormInput = styled.input`
  padding: 16px 16px;
  margin: 0.5rem;
  border: none;
  border-radius: 4px;
`
const FormButton = styled.button`
  background: ${isuzuTheme.red};
  padding: 16px 16px;
  margin: 0.5rem;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${isuzuTheme.trueRed};
    transform: translateY(-2px);
  }
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

const TextArea = styled.textarea`
  padding: 16px 16px;
  margin: 0.5rem;
  border: none;
  border-radius: 4px;
  min-height: 100px;
  resize: none;
`
const GetQuote = () => {
  const dispatch = useDispatch()
  const vehicleList = useSelector((state) => state.vehicleList)
  const { loading, error, vehicles } = vehicleList

  useEffect(() => {
    dispatch(listVehicles())
  }, [dispatch])

  return (
    <QuoteContainer>
      <QuoteWrapper>
        <Header>
          <H1>GET A QUOTE</H1>
          <Hr width="100%" />
        </Header>
        {loading ? (
          <Loader isLoading={loading} />
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <FormWrapper>
            <Form>
              <Select defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>
                  Choose Model *
                </option>
                {vehicles.map((vehicle, index) => (
                  <option key={index} value={vehicle._id}>
                    {vehicle.name}
                  </option>
                ))}
              </Select>
              <FormInput
                type="text"
                name="customer_name"
                placeholder="Your Name *"
                required
              />
              <FormInput
                type="text"
                name="customer_email"
                placeholder="Your Email *"
                required
              />
              <TextArea name="message" placeholder="Your Message *"></TextArea>
              <FormButton type="submit">Get Quote</FormButton>
            </Form>
          </FormWrapper>
        )}
      </QuoteWrapper>
    </QuoteContainer>
  )
}

export default GetQuote
