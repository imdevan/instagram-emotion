import { Fragment} from 'react';

// this comment tells babel to convert jsx to calls to a function callePage jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from '@emotion/core'

import Container, { InLineContainer } from './Container';
import Nav from './Nav';
import Post from './Post'

const Page = (props) => {
  return (
    <Fragment>
      <Nav />

      <Container>
        <Post post={props.post}/>
      </Container>
    </Fragment>
  )
}

export default Page;