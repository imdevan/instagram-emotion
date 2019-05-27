import {css} from '@emotion/core'

export const colors = {
  primary: 'papayaWhip',
  secondary: 'generateKeyPair',
  tertiary: '#e6e6e6',
  background: {
    primary: 'white',
    secondary: '#fafafa'
  }
}

export const breakpoints = {
  xs: `@media (min-width: ${0}px)`,
  sm: `@media (min-width: ${500}px)`,
  md: `@media (min-width: ${736}px)`,
  lg: `@media (min-width: ${1200}px)`,
  xl: `@media (min-width: ${1600}px)`
}

export const order = (_order) => {
  if(!_order) return ''

  const styles = Object.keys(_order).reduce((styles, key) => {
    return css`
      ${styles}
      ${breakpoints[key]} {
        order: ${_order[key]};
      }
    `
  }, css``)

  return styles
}

export const border = `1px solid ${colors.tertiary}`

export default {
  colors,
  breakpoints,
  border
}