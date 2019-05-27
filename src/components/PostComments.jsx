// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import {order, colors, breakpoints, border} from '../theme'

const Comment = ({comment}) => {
  const {userName, text} = comment;

  return (
    <div css={css`width: 100;`}>
      <strong>@{userName}:</strong> 
      <p css={css`display: inline-block;`} dangerouslySetInnerHTML={{__html: text}} />
    </div>
  )
}

const StyledComments = styled.div`
  background: ${colors.background.primary};
  width: 100%;
  padding: 1rem;
  min-height: 200px;

  ${breakpoints.md} {
    border-bottom: ${border};
    width: 50%;
    flex-grow: 1
  }
`;

const PostComments = ({order: _order, comments, ...rest}) => {
  return (
    <StyledComments {...rest} css={css`${order(_order)}`}>
      {comments.map(_commenet => <Comment comment={_commenet} />)}
    </StyledComments>
  )
}

export default PostComments;