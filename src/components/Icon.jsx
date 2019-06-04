import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconWrapper = styled.span`
  cursor: ${props => props.pointer && 'pointer'};
` 

const StyledIcon = styled(FontAwesomeIcon)`
  transition: color .15s ease-in-out;

  font-size: ${({fontSize}) => fontSize}px;
  margin-right:  ${({marginRight, marginRightValue}) => marginRight ? marginRightValue : 0}px;
  color:  ${({active, activeColor}) =>{return active && activeColor ? activeColor : 'currentColor'}};
`

let Icon = (props) => {
  const [active, setActive] = useState(false);

  return (
    <IconWrapper onClick={() => setActive(!active)} pointer={props.activeColor}>
      <StyledIcon {...props} active={active} />
    </IconWrapper>
  )
}

Icon.defaultProps = {
  fontSize: 30,
  marginRightValue: 30,
  active: false
}

export default Icon