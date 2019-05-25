// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from '@emotion/core'
import {Fragment} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const navHeight = 60

const Nav = props => {
  return (
    <Fragment>
    <div css={{
      display: 'block',
      height: navHeight
    }} />
    <nav css={{
      boxSizing: 'border-box',
      height: navHeight,
      padding: '0 1rem',
      left: 0,
      top: 0,
      width: '100%',
      backgroundColor: 'white',
      borderBottom: '1px solid #282828',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed'
    }} {...props} >
      <FontAwesomeIcon icon={faInstagram} css={{
        fontSize: 40,
      }}/>

      <div>
        <FontAwesomeIcon icon={faCompass} css={{
          fontSize: 40,
          marginRight: 10
        }} />
        <FontAwesomeIcon icon={faHeart} css={{
          fontSize: 40,
          marginRight: 10
        }} />
        <FontAwesomeIcon icon={faUser} css={{
          fontSize: 40,
        }} />
      </div>
    </nav>
    </Fragment>
  )
}
export default Nav;
