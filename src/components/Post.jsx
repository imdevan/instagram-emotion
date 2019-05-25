// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PostHeader from './PostHeader'
import PostReactions from './PostReactions'
import PostComments from './PostComments'

const Post = ({post}) => {
  return (
    <div css={{
      maxWidth: 1200,
      width: '90%',
      margin: 'auto',
    }}>
      <PostHeader user={post.user}/>

      <img css={{
        width: '100%'
      }} src={post.image} alt={post.description} />
      <PostReactions />
      <PostComments />
    </div>
  )
}

export default Post;