import React from 'react'
import styled from 'styled-components'

const Alert = styled.div`
  background-color: ${({ variant }) =>
    variant === 'error'
      ? '#ffcccc'
      : variant === 'alert'
      ? '#ffe4b2'
      : variant === 'success'
      ? '#ccccff'
      : 'ffdfe5'};
  padding: 10px;
  margin: 0.5rem;
  border-radius: 8px;
`

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>
}

// Message.defaultProps = { variant: 'info' }

export default Message
