/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import styled from '@emotion/styled'
import {breakpoints, order, border} from '../theme'

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${border};

  ${breakpoints.md} {
    border-bottom: none;
    border-right: ${border};
    width: 50%;
    height: 100%;
  }
`

export default props => <ImageWrapper css={css`${order(props.order)}`} >
  <img {...props} css={css`width: 100%`} />
</ImageWrapper>;