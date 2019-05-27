/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import styled from '@emotion/styled'
import {breakpoints, colors, border, order} from '../theme'

const UserAvatar = styled.img`
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  display: inline-block;
  margin-right: 1rem;
`


const StyledHeader = styled.div`
  background-color: ${colors.background.primary};
  width: 100%;
  height: 72px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: start;
  border-bottom: ${border};

  ${breakpoints.md} {
    width: 50%;
  }
`;

export default ({user, ...rest}) => {
  return (
    <StyledHeader {...rest} css={css`${order(rest.order)}`}>

      <UserAvatar src={user.image} alt={user.userName}/>
      <h2>@{user.userName}</h2>
    </StyledHeader>
  )
};