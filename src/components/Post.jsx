import React from 'react'
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
  background: ${colors.background.primary};

  ${breakpoints.md} {
    height: 500px;
    width: 100%;
    margin-top: 100px;
    border: ${border};
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }
`

const Post = ({post}) => {
  return (
    <StyledPost>
      <PostHeader user={post.user} order={{xs: 1, md: 2}}/>

      <PostImage src={post.image} alt={post.description} order={{xs: 2, md: 1}} />
      <PostReactions order={{xs: 3, md: 4}} />
      <PostComments comments={post.comments} order={{xs: 4, md: 3}} />
    </StyledPost>
  )
}

export default Post;