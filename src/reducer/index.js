import {combineReducers} from 'redux'
import communities from './communities'
import {routerReducer as router} from 'react-router-redux'

export default combineReducers({
    communities,
    router,
})