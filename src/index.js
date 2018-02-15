import React from 'react'
import {render} from 'react-dom'
//import {Root} from './components/Root'

import store from './store'
import registerServiceWorker from './components/registerServiceWorker'
//import UserList from "./components/UserList/UserList";
import Root from "./components/Root"
//import RootAlt from "./components/RootAlt"

render(<Root store = {store}/>, document.getElementById('container'))
//render(<App/>, document.getElementById('container'))
registerServiceWorker()
