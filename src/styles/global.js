// @flow
import React from 'react'
import { Global } from '@emotion/core'

const GlobalStyles = () => (
  <Global
    styles={{
      body: {
        margin: 0,
        padding: 0,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
    }}
  />
)

export default GlobalStyles
