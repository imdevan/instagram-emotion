// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from '@emotion/core'

const Container = props => {
  return (
    <div css={{
      maxWidth: 1200,
      width: '90%',
      margin: 'auto',
      overflowX: 'scroll',
    }}
    {...props} />
  )
}

export const InLineContainer = props => {
  return (
    <div style={{
      maxWidth: 1200,
      width: '90%',
      overflowX: 'scroll',
      margin: 'auto',
    }}
    {...props} />
  )
}

export default Container;