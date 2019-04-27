// @flow
import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import Particles from 'react-particles-js'

// styles.
import styles from './app.styles'

const AppWrapper = styled('div')(styles.App)
const AppHeader = styled('header')(styles.AppHeader)

const particleOptions = {
  particles: {
    number: {
      value: 50,
    },
    size: {
      value: 3,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
}

const App = () => (
  <Fragment>
    <AppWrapper>
      <AppHeader>
        <p>
          <span role="img" aria-label="Nerd">
            🤓
          </span>
        </p>
      </AppHeader>
    </AppWrapper>
    <Particles params={particleOptions} style={styles.AppBackground} />
  </Fragment>
)

export default App
