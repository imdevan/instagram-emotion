// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import PostHeader from './PostHeader'
import PostReactions from './PostReactions'
import PostComments from './PostComments'
import PostImage from './PostImage'
import {breakpoints, colors, border} from '../theme'

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 500px;
  ${breakpoints.md} {
    margin-top: 100px;
    border: ${border};
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }
`

const Post = ({post}) => {
  return (
    <StyledPost>
      <PostHeader user={post.user} order={2}/>

      <PostImage src={post.image} alt={post.description} />
      <PostReactions />
      <PostComments />
    </StyledPost>
  )
}

export default Post;