// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from '@emotion/core'

const Post = props => {
  return (
    <div css={{
      maxWidth: 1200,
      width: '90%',
      margin: 'auto',
    }}
      {...props} />
  )
}

export const InLinePost = props => {
  return (
    <div style={{
      maxWidth: 1200,
      width: '90%',
      margin: 'auto',
    }}
      {...props} />
  )
}

export default Post;