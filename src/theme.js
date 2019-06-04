import {css} from '@emotion/core'

export const colors = {
  primary: 'papayaWhip',
  secondary: 'generateKeyPair',
  tertiary: '#e6e6e6',
  activeHeart: '#ed4956',
  activeBookmark: '#3897f0',
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
  let styles = css``
  if(!_order) return styles;

  Object.keys(_order).forEach((key) => {
    styles = css`
      ${styles}

      ${breakpoints[key]} {
        order: ${_order[key]};
      }
    `
  }) 

  return styles
}

export const border = `1px solid ${colors.tertiary}`

export const nav = {
  height: '60px'
}

export default {
  colors,
  breakpoints,
  border,
  nav
}