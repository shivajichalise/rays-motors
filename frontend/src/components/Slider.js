import React, { useState, useRef, Fragment } from 'react'
import styled, { css } from 'styled-components/macro'
// import img from '../images/cars/1.jpg'
import { MdArrowRight, MdArrowLeft } from 'react-icons/md'

const SliderContainer = styled.div`
  height: 100vh;
  width: 100%;
  // background: #f00;
`

const SliderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SliderContent = styled.div`
  // background: #0f0;
  width: 70vw;
  height: 90vh;
  display: flex;
`

const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background: #00f;

  width: 50%;
  height: 100%;
  word-wrap: break-word;

  padding: 0 1rem;

  h1 {
    color: #d55209;
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    color: #e26313;
    margin-bottom: 2rem;
  }
`

const ImageWrapper = styled.div`
  // background: #0ff;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  object-fit: contain;
  height: 95%;
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

  // useEffect(() => {
  //   const nextSlide = () => {
  //     setCurrent((current) => (current === length - 1 ? 0 : current + 1))
  //   }

  //   timeout.current = setTimeout(nextSlide, 1000)
  //   return function () {
  //     if (timeout.current) {
  //       clearTimeout(timeout.current)
  //     }
  //   }
  // }, [current, length])

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
                    <ImageContent>
                      <h1>{item.title}</h1>
                      <p>{item.price}</p>
                    </ImageContent>
                    <ImageWrapper>
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
