// @flow
import React from 'react'
import styled from '@emotion/styled'

// styles.
import styles from './app.styles'

const AppWrapper = styled('div')(styles.App)
const AppHeader = styled('header')(styles.AppHeader)

const App = () => (
  <AppWrapper>
    <AppHeader>
      <h1>Viren.</h1>
      <p>Experience technologist</p>
      <p>🤓</p>
    </AppHeader>
  </AppWrapper>
)

export default App
