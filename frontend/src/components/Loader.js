import React from 'react'
import styled from 'styled-components'

const Loading = styled.div`
  height: 100vh;
  margin-top: -90px;
  display: ${({ isLoading }) => (isLoading === true ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  .lds-hourglass {
    display: ${({ isLoading }) =>
      isLoading === true ? 'inline-block' : 'none'};
    position: relative;
    z-index: 9999;
  }

  .lds-hourglass:after {
    content: ' ';
    display: flex;
    justify-content: center;
    align-items: center;
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    border: 32px solid #fd0d1b;
    border-color: #fd0d1b transparent #fd0d1b transparent;
    animation: lds-hourglass 1.2s infinite;
  }

  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`

const Loader = ({ isLoading }) => {
  return (
    <Loading isLoading={isLoading}>
      <div className="lds-hourglass"></div>
    </Loading>
  )
}

export default Loader
