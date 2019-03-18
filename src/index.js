// @flow
import 'react-app-polyfill/ie9'
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'

// components.
import App from './components/App'

// styles.
import Global from './styles/global'
import 'sanitize.css'

// utils.
import * as serviceWorker from './serviceWorker'

WebFont.load({
  google: {
    families: ['Open Sans:400', 'sans-serif'],
  },
})

ReactDOM.render(
  <Fragment>
    <Global />
    <App />
  </Fragment>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
