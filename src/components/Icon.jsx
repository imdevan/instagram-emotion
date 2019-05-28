import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledIcon = styled(FontAwesomeIcon)`
  transition: color .15s ease-in-out;

  font-size: ${({fontSize}) => fontSize}px;
  margin-right:  ${({marginRight, marginRightValue}) => marginRight ? marginRightValue : 0}px;
  color:  ${({active, activeColor}) =>{return active && activeColor ? activeColor : 'currentColor'}};
`
const StyledWrapper = styled.span`
  cursor: ${props => props.pointer && 'pointer'};
` 

let Icon = (props) => {
  const [active, setActive] = useState(false);

  return (
    <StyledWrapper onClick={() => setActive(!active)} pointer={props.activeColor}>
      <StyledIcon {...props} active={active} />
    </StyledWrapper>
  )
}

Icon.defaultProps = {
  fontSize: 30,
  marginRightValue: 30,
  active: false
}

export default Icon