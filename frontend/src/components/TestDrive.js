import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listVehicles } from '../actions/vehicleActions'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { isuzuTheme } from '../styles/theme'
import { ImLocation } from 'react-icons/im'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import LoaderMin from './LoaderMin'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'

const ContactPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    height: 100%;
  }
`
const ContactPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const H3 = styled.h3`
  font-family: Usuzi;
  color: ${isuzuTheme.text};
  text-decoration: none;
`

const H = styled(Link)`
  font-family: Usuzi;
  font-size: 1.5rem;
  color: ${isuzuTheme.red};
  text-decoration: none;
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const LeftColumn = styled.div`
  flex: 40%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${isuzuTheme.red};
  order: 1;

  @media (max-width: 768px) {
    flex: 100%;
    order: 2;
  }
`

const RightColumn = styled.div`
  flex: 60%;
  background: ${isuzuTheme.card};
  display: flex;
  justify-content: center;
  align-items: center;

  order: 2;

  @media (max-width: 768px) {
    width: 95vw;
    flex: 100%;
    order: 1;
  }
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border: 0.2px solid ${isuzuTheme.card};
  border-radius: 50%;
  margin: 1rem;
`

const Icon = css`
  height: 20px;
  width: 20px;
  color: ${isuzuTheme.card};
`

const Location = styled(ImLocation)`
  ${Icon}
`

const Mail = styled(MdEmail)`
  ${Icon}
`

const Phone = styled(BsFillTelephoneFill)`
  ${Icon}
`

const Paragraph = styled.p`
  padding: 1rem;
  color: ${isuzuTheme.card};
  word-break: break-all;
`

const Paragraph2 = styled.p`
  padding: 0 0 1rem 0;
  color: ${isuzuTheme.text};
  word-break: break-word;
`

const Heading = styled.div`
  padding: 1rem;
  color: ${isuzuTheme.card};
`

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
`

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`

const Form = styled.form`
  width: 100%;
`

const FormInput = styled.input`
  padding: 16px 16px;
  margin: 0 0 0.5rem 0;
  width: 100%;
  border: none;
  border-radius: 4px;
`

const Checkbox = styled.input`
  // padding: 16px 16px;
  margin: 0 0.4rem 0rem 0rem;
  border: none;
  border-radius: 4px;
`

const Table = styled.table`
  width: 100%;
`

const FormButton = styled.button`
  background: ${isuzuTheme.red};
  padding: 10px 10px;
  margin: 10px 0 0 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
`

const Anchor = styled.a`
  text-decoration: none;
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: ${isuzuTheme.card};
    transition: 0.3 ease-in-out;
  }
`
const Select = styled.select`
  padding: 16px 16px;
  margin: 0 0 0.5rem 0;
  width: 100%;
  border: none;
  border-radius: 4px;

  color: ${isuzuTheme.text};
  width: 100%;
  background: ${isuzuTheme.grey};
  border: 1px solid #dddddd;
  cursor: pointer;

  &:hover {
    outline: none;
    border: 1px solid #bbbbbb;
  }
`

const Contact = () => {
  const dispatch = useDispatch()

  const vehicleList = useSelector((state) => state.vehicleList)
  const { loading, error, vehicles } = vehicleList

  const MySwal = withReactContent(Swal)

  const [isSending, setIsSending] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [selectedVehicle, setSelectedVehicle] = useState('')

  const submitHandler = (e) => {
    setIsSending(true)
    e.preventDefault()

    const payload = {
      name: customerName,
      email: customerEmail,
      phone: customerPhone,
      vehicle: selectedVehicle,
    }

    axios
      .post('/booktestdrive', payload)
      .then((response) => {
        MySwal.fire({
          icon: 'success',
          title: 'Great!',
          text: "Thanks for reaching out to us. We'll get back to you ASAP.",
        })
      })
      .catch((error) => {
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Please try again later.',
        })
      })
      .then(
        (result) => {
          setIsSending(false)
        },
        (error) => {
          setIsSending(false)
        }
      )

    e.target.reset()
  }

  const onChangeCaptcha = () => {
    setIsVerified(true)
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
    <ContactPageContainer>
      <ContactPageWrapper>
        <H to="/">RAYS MOTORS</H>
        <H3>Book a test drive</H3>
        <Wrapper>
          <LeftColumn>
            <Heading>
              <h3>Reach us:</h3>
            </Heading>
            <ContactInfo>
              <IconWrapper>
                <Location />
              </IconWrapper>
              <Paragraph>
                <Anchor
                  href="https://goo.gl/maps/EWUQ2kWBRB3KDso36"
                  target="_blank"
                >
                  Uttam Chowk - 10, Pokhara Lekhnath
                </Anchor>
              </Paragraph>
            </ContactInfo>
            <ContactInfo>
              <IconWrapper>
                <Phone />
              </IconWrapper>

              <Paragraph>
                <Anchor href="tel:+9776153544" target="_blank">
                  +977 61-535444
                </Anchor>
              </Paragraph>
            </ContactInfo>
            <ContactInfo>
              <IconWrapper>
                <Mail />
              </IconWrapper>
              <Paragraph>
                <Anchor href="mailto:info@raysmotors.com.np" target="_blank">
                  info@raysmotors.com.np
                </Anchor>
              </Paragraph>
            </ContactInfo>
          </LeftColumn>
          <RightColumn>
            <FormWrapper>
              <Form onSubmit={submitHandler}>
                <Table>
                  <tbody>
                    <tr>
                      <td colSpan="2">
                        <FormInput
                          type="text"
                          name="customer_name"
                          placeholder="Your Name *"
                          required
                          onChange={(e) => setCustomerName(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <FormInput
                          type="phone"
                          name="customer_phone"
                          placeholder="Your Phone no. *"
                          required
                          onChange={(e) => setCustomerPhone(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <FormInput
                          type="email"
                          name="customer_email"
                          placeholder="Your Email *"
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <Select
                          defaultValue={'DEFAULT'}
                          name="vehicle"
                          onChange={(e) => setSelectedVehicle(e.target.value)}
                          required
                        >
                          <option value="DEFAULT" disabled>
                            Choose Model *
                          </option>
                          {vehicles.map((v, index) => (
                            <option key={index} value={v.name}>
                              {v.name}
                            </option>
                          ))}
                        </Select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Paragraph2>
                          <Checkbox type="checkbox" required />I agree that by
                          clicking on "Submit", I am explicitly soliciting a
                          call from ISUZU Motors or its associates on my mobile
                          number to assist me in purchasing ISUZU Vehicles.
                        </Paragraph2>
                      </td>
                    </tr>
                    <tr>
                      <td align="right">
                        <ReCAPTCHA
                          sitekey="6Ld9nbccAAAAAAceiSh2tlbODOAnKO2jPHcvj3kR"
                          onChange={onChangeCaptcha}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} align="right">
                        {isSending ? (
                          <LoaderMin />
                        ) : (
                          <FormButton type="submit" disabled={!isVerified}>
                            Submit
                          </FormButton>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Form>
            </FormWrapper>
          </RightColumn>
        </Wrapper>
      </ContactPageWrapper>
    </ContactPageContainer>
  )
}

export default Contact
