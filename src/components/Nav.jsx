// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from '@emotion/core'
import {Fragment} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import Container from './Container';
import {colors, border} from '../theme'

const navHeight = 60

const Nav = ({iconMarginRight, iconFontSize}) => {
  return (
    <Fragment>
    {/* <div css={{
      display: 'block',
      height: navHeight
    }} /> */}

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
      <FontAwesomeIcon icon={faInstagram} css={{
        fontSize: iconFontSize,
      }}/>

      <div>
        <FontAwesomeIcon icon={faCompass} css={{
          fontSize: iconFontSize,
          marginRight: iconMarginRight
        }} />
        <FontAwesomeIcon icon={faHeart} css={{
          fontSize: iconFontSize,
          marginRight: iconMarginRight
        }} />
        <FontAwesomeIcon icon={faUser} css={{
          fontSize: iconFontSize,
        }} />
      </div>
    </Container>
    </nav>
    </Fragment>
  )
}

Nav.defaultProps = {
  iconFontSize: 30,
  iconMarginRight: 30
}
export default Nav;
