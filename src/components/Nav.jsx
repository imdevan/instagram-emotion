import React from 'react'
import styled from '@emotion/styled'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import Container from './Container';
import Icon from './Icon'
import {colors, border, nav} from '../theme'

const StyledNav = styled.nav`
  box-sizing: border-box;
  height: ${nav.height};
  padding: 0 1rem;
  width: 100%;
  background-color: ${colors.background.primary};
  border-bottom: ${border};
`;

const StyledContainer = styled(Container)`
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = () => {
  return (
    <StyledNav> 
      <StyledContainer>
        <Icon icon={faInstagram} />

        <div>
          <Icon icon={faCompass} marginRight />
          <Icon icon={faHeart} marginRight />
          <Icon icon={faUser} />
        </div>
      </StyledContainer>
    </StyledNav>
  )
}

export default Nav;
