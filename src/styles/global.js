// @flow
import React from 'react'
import { Global } from '@emotion/core'

export default () => (
  <Global
    styles={{
      body: {
        margin: 0,
        padding: 0,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        /* eslint-disable no-dupe-keys */
        background: '#16222A',
        background: '-webkit-linear-gradient(to right, #3A6073, #16222A)',
        background: 'linear-gradient(to right, #3A6073, #16222A)',
        /* eslint-enable no-dupe-keys */
        fontSize: 'calc(16px + 2vmin)',
      },
      h1: {
        fontSize: '1em',
        fontWeight: '400',
      },
      p: {
        margin: '.4em 0',
      },
    }}
  />
)
