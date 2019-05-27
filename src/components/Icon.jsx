/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

let Icon = ({fontSize, marginRight, marginRightValue, icon, active: _active, activeColor, ...rest}) => {
  const [active, setActive] = useState(_active);

  return (
    <span onClick={() => setActive(!active)} css={css`cursor: ${activeColor && 'pointer'};`}>
    <FontAwesomeIcon icon={icon} css={css`
      transition: color .15s ease-in-out;
      font-size: ${fontSize}px;
      margin-right:  ${marginRight ? marginRightValue : 0}px}
      color:  ${active && activeColor ? activeColor : 'currentColor'}};
      
      `} {...rest} />
    </span>
  )
}

Icon.defaultProps = {
  fontSize: 30,
  marginRightValue: 30,
  active: false
}

export default Icon