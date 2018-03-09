import {combineReducers} from 'redux'
import communities from './communities'
import users from './users'
import selectedCommunity from './selectedCommunity'
import {routerReducer as router} from 'react-router-redux'

export default combineReducers({
    communities,
    users,
    selectedCommunity,
    router,
})