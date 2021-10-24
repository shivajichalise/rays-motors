import React, { useState, useEffect, useRef, Fragment } from 'react'
import styled, { css } from 'styled-components/macro'
// import img from '../images/cars/1.jpg'
import { MdArrowRight, MdArrowLeft } from 'react-icons/md'
import { motion } from 'framer-motion'

const SliderContainer = styled.div`
  height: 100vh;
  width: 100%;
  // background: #f00;
  display: flex;

  align-items: center;
  justify-content: center;
`

const SliderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 100vh;
    align-items: flex-start;
  }
`

const SliderContent = styled.div`
  // background: #0f0;
  width: 60vw;
  height: 90vh;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1024px) {
    height: 80%;
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 90vw;
    height: 100vh;
  }
`

const ImageContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background: #00f;

  width: 50%;
  height: 100%;
  word-wrap: break-word;

  h1 {
    color: #d55209;
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    color: #e26313;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 1024px) {
    width: 30%;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 40vh;
    order: 2;
    align-items: center;
    margin: 0;

    h1 {
      margin-bottom: 0.5rem;
    }

    p {
      margin-bottom: 0.5rem;
      text-align: center;
    }
  }
`

const ImageWrapper = styled(motion.div)`
  // background: #0ff;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 60vh;
    order: 1;
  }
`

const Image = styled.img`
  object-fit: contain;
  height: 95%;

  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #e26313;
  cursor: pointer;
  padding: 10px;
  user-select: none;
  transition: 0.3s;

  &:hover {
    transform: scale(1.5);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const PrevArrow = styled(MdArrowLeft)`
  ${arrowButtons}
`

const NextArrow = styled(MdArrowRight)`
  ${arrowButtons}
`

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const timeout = useRef(null)

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1))
    }

    timeout.current = setTimeout(nextSlide, 5000)
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [current, length])

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }

    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }

    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <SliderContainer>
      <SliderWrapper>
        <PrevArrow onClick={prevSlide} />
        <SliderContent>
          {slides.map((item, index) => {
            return (
              <Fragment key={index}>
                {index === current && (
                  <>
                    <ImageContent
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <h1>{item.title}</h1>
                      <p>{item.desc}</p>
                      <p>{item.price}</p>
                    </ImageContent>
                    <ImageWrapper
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <Image src={item.imgSrc} alt={item.alt} />
                    </ImageWrapper>
                  </>
                )}
              </Fragment>
            )
          })}
        </SliderContent>
        <NextArrow onClick={nextSlide} />
      </SliderWrapper>
    </SliderContainer>
  )
}

export default Slider
