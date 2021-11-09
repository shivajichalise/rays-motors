import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { isuzuTheme } from '../styles/theme'

const style = css`
  background: ${({ primary }) => (primary ? isuzuTheme.red : '#141414')};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-item: center;
  margin: 1rem;
  padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
  color: ${({ primary }) => (primary ? isuzuTheme.white : '#000d1a')};
  font-size: ${({ big }) => (big ? '20px' : '14px')};

  &:hover {
    transform: translateY(-2px);
  }
`

export const ButtonAnchor = styled.a`
  ${style}
`

export const ButtonLink = styled(Link)`
  ${style}
`
