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

export const border = `1px solid ${colors.tertiary}`

export default {
  colors,
  breakpoints,
  border
}