import React from 'react'
import styled from '@emotion/styled'

import GlobalStyles from './GlobalStyles'
import Container from './Container'
import Nav from './Nav'
import Post from './Post'

const StyledPage = styled.main`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
`

const StyledContainer = styled(Container)`
  margin: auto;
  display: flex;
  flexGrow: 1;
  height: 100%;
  justifyContent: space-between;
  alignItems: center;
`

const Page = (props) => {
  return (
    <StyledPage>
      <Nav/>
      <GlobalStyles />

      <StyledContainer>
        <Post post={props.post}/>
      </StyledContainer>
    </StyledPage>
  )
}

export default Page