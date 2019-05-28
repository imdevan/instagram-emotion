import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledIcon = styled(FontAwesomeIcon)`
  transition: color .15s ease-in-out;

  font-size: ${props => props.fontSize}px;
  margin-right:  ${props => props.marginRight ? props.marginRightValue : 0}px}
  color:  ${props =>{return props.active && props.activeColor ? props.activeColor : 'currentColor'}}};
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