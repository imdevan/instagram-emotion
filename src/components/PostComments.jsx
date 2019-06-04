import React from 'react'
import styled from '@emotion/styled'
import {order, colors, breakpoints, border} from '../theme'

const StyledComment = styled.div`
  width: 100%;
`

const Comment = ({comment}) => {
  const {userName, text} = comment;

  return (
    <StyledComment>
      <strong>@{userName}:</strong> 
      <span dangerouslySetInnerHTML={{__html: text}} />
    </StyledComment>
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
    flex-grow: 1;
  }

  ${props => props.order && order(props.order)}
`;

const PostComments = ({comments, ...rest}) => {
  return (
    <StyledComments {...rest} >
      {comments.map((_commenet, i) => <Comment key={i} comment={_commenet} />)}
    </StyledComments>
  )
}

export default PostComments;