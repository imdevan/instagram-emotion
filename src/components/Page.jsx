/** @jsx jsx */
import { jsx } from '@emotion/core'

import GlobalStyles from './GlobalStyles'
import Container from './Container'
import Nav from './Nav'
import Post from './Post'


const Page = (props) => {
  return (
    <div css={{
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Nav/>
      <GlobalStyles />

      <Container css={{
        margin: 'auto',
        display: 'flex',
        flexGrow: '1',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Post post={props.post}/>
      </Container>
    </div>
  )
}

export default Page