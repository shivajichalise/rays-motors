import styled from 'styled-components'

const HR = styled.hr`
  width: ${({ width }) => (width ? width : '80%')};
  height: ${({ height }) => (height ? height : '2px')};
  color: #000;
  margin: 0 0 1rem 0;
`

const Hr = ({ width, height }) => {
  return <HR width={width} height={height} />
}

export default Hr
