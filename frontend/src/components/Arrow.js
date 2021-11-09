import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { animateScroll as scroll } from 'react-scroll'
import { isuzuTheme } from '../styles/theme'
import { MdArrowDropUp } from 'react-icons/md'

const SliderButtons = styled.div`
  position: fixed;
  display: ${({ isScrolling }) => (isScrolling ? 'block' : 'none')};
  right: 10px;
  bottom: 10px;
  z-index: 99999;
`

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: ${isuzuTheme.white};
  cursor: pointer;
  background: ${isuzuTheme.red};
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: ${isuzuTheme.truRed};
    transform: scale(1.05);
  }
`

const UpArrow = styled(MdArrowDropUp)`
  ${arrowButtons}
`

const Arrow = () => {
  const [scrolling, setScrolling] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 300) {
      setScrolling(true)
    } else {
      setScrolling(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)

    return () => {
      window.removeEventListener('scroll', changeNav)
    }
  }, [])

  const scrollUp = () => {
    scroll.scrollToTop()
  }

  return (
    <SliderButtons isScrolling={scrolling}>
      <UpArrow onClick={scrollUp} />
    </SliderButtons>
  )
}

export default Arrow
