import React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../theme'

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 0px 40px ;

  ${breakpoints.md} {
    max-width: 935px;
    width: 80%;
  }

  ${breakpoints.lg} {
    max-width: 1200px;
  }
`;

export const InLineContainer = props => {
  return (
    <div style={{
      maxWidth: 1200,
      width: '90%',
      overflowX: 'scroll',
      margin: 'auto',
    }}
    {...props} />
  )
}

export default (props) => (<Container {...props} />);