import React from 'react'
import styled from '@emotion/styled'
import {breakpoints, colors, border} from '../theme'

const StyledHeader = styled.div`
  order: ${({order}) => order || '1'};
  background-color: ${colors.background.primary};

  ${breakpoints.md} {
    border-bottom: ${border};
    width: 335px;
    height: 72px;
  }
`

export default ({userName = 'user', rest}) => {
  return (
    <StyledHeader {...rest} >
      <h2>{userName}</h2>
    </StyledHeader>
  )
};