import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import configureStore from './_redux/store'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>
, document.getElementById('root'))
registerServiceWorker()