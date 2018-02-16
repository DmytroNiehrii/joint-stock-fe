import React from 'react'
import {render} from 'react-dom'

import store from './store'
import registerServiceWorker from './components/registerServiceWorker'
import Root from "./components/Root"

render(<Root store = {store}/>, document.getElementById('container'))

registerServiceWorker()
