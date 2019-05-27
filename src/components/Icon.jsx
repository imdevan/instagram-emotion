/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let Icon = ({fontSize, marginRight, marginRightValue, icon, active, activeColor, ...rest}) => (
  <FontAwesomeIcon icon={icon} css={css`
    font-size: ${fontSize}px;
    margin-right:  ${marginRight ? marginRightValue : 0}px}
  `} {...rest} />
)

Icon.defaultProps = {
  fontSize: 30,
  marginRightValue: 30,
  activeColor: 'blue'
}

export default Icon