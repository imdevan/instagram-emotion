import React from 'react'
import { Global } from '@emotion/core'
import {colors} from '../theme'

export default () => (
  <Global styles={{
    '*': {
      boxSizing: 'border-box'
    },
    'body': {
      backgroundColor: `${colors.background.secondary}`
    }
  }} />
)