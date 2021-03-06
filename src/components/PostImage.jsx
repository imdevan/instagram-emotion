import React from 'react'
import styled from '@emotion/styled'
import {breakpoints, order, border} from '../theme'

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${border};

  ${breakpoints.md} {
    border-bottom: none;
    border-right: ${border};
    width: 50%;
    height: 100%;
  }
  
  ${props => props.order && order(props.order)}
`

const StyledImage = styled.img`
  width: 100%;
`
export default props => <ImageWrapper>
  <StyledImage {...props} />
</ImageWrapper>;