// @flow
import React from 'react'
import styled from '@emotion/styled'

// assets.
import logo from './logo.svg'

// styles.
import styles from './app.styles'

const AppWrapper = styled('div')(styles.App)
const AppHeader = styled('header')(styles.AppHeader)
const AppLogo = styled('img')(styles.AppLogo)

const App = () => (
  <AppWrapper>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      <p>Hello!</p>
    </AppHeader>
  </AppWrapper>
)

export default App
