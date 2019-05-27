import React from 'react'
import styled from '@emotion/styled'
import {breakpoints} from '../theme'

const StyledImage = styled.img`
  order: ${({order}) => order || '1'};

  ${breakpoints.md} {
    width: 598px;
    height: auto;
  }
`

export default props => <StyledImage {...props} />;