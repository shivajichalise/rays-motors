import React, { useState, useRef } from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { isuzuTheme } from '../styles/theme'
import { ImLocation } from 'react-icons/im'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import LoaderMin from './LoaderMin'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import emailjs from 'emailjs-com'
import ReCAPTCHA from 'react-google-recaptcha'

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

const H1 = styled(Link)`
  font-family: Usuzi;
  font-size: 2.2rem;
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

const TextArea = styled.textarea`
  padding: 16px 16px;
  border: none;
  border-radius: 4px;
  width: 100%;
  min-width: 300px;
  min-height: 100px;
  resize: none;
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

const Contact = () => {
  const MySwal = withReactContent(Swal)

  const form = useRef()

  const [isSending, setIsSending] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  const submitHandler = (e) => {
    setIsSending(true)
    e.preventDefault()
    emailjs
      .sendForm(
        'service_t5dokeo',
        'template_g2hhhyi',
        form.current,
        'user_R1GcPi2XjFqNdrvoCg3LW'
      )
      .then(
        (result) => {
          MySwal.fire({
            icon: 'success',
            title: 'Great!',
            text: "Thanks for reaching out to us. We'll get back to you ASAP.",
          })
        },
        (error) => {
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please try again later.',
          })
        }
      )
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
  return (
    <ContactPageContainer>
      <ContactPageWrapper>
        <H1 to="/">RAYS MOTORS</H1>
        <Wrapper>
          <LeftColumn>
            <Heading>
              <h3>Let's get in touch</h3>
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
                <Anchor href="mailto:isuzupokhara@gmail.com" target="_blank">
                  isuzupokhara@gmail.com
                </Anchor>
              </Paragraph>
            </ContactInfo>
          </LeftColumn>
          <RightColumn>
            <FormWrapper>
              <Form ref={form} onSubmit={submitHandler}>
                <Table>
                  <tbody>
                    <tr>
                      <td>
                        <FormInput
                          type="text"
                          name="customer_name"
                          placeholder="Your Name *"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <FormInput
                          type="text"
                          name="customer_email"
                          placeholder="Your Email *"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <FormInput
                          type="text"
                          name="subject"
                          placeholder="Subject *"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <TextArea
                          placeholder="Your Message *"
                          name="message"
                          required
                        />
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
                            Send Message
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
