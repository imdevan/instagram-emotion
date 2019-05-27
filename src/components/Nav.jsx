// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from '@emotion/core'

import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import Container from './Container';
import Icon from './Icon'
import {colors, border} from '../theme'

const navHeight = 60

const Nav = ({iconMarginRight, iconFontSize}) => {
  return (
    <nav css={{
      boxSizing: 'border-box',
      height: navHeight,
      padding: '0 1rem',
      width: '100%',
      backgroundColor: colors.background.primary,
      borderBottom: border,
    }}> 
    <Container css={{
      height: '100%',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Icon icon={faInstagram} />

      <div>
        <Icon icon={faCompass} marginRight />
        <Icon icon={faHeart} marginRight />
        <Icon icon={faUser} />
      </div>
    </Container>
    </nav>
  )
}

export default Nav;
