// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'

import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'

import Icon from './Icon'
import {order, colors, border, breakpoints} from '../theme'

const StyledReactions = styled.div`
  padding: 1rem;
  display: flex; 
  align-items: center;
  justify-content: space-between;

  ${breakpoints.md} {
    border-top: ${border};
  }
`

const PostReactions = props => {
  return (
    <StyledReactions {...props} css={css`${order(props.order)}`} >
      <div>
        <Icon icon={faHeart} marginRight />
        <Icon icon={faComment} marginRight />
        <Icon icon={faShare} marginRight />
      </div>

      <Icon icon={faBookmark} />
    </StyledReactions>
  )
}

export default PostReactions;