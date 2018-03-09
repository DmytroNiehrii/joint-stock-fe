import { LOAD_ALL_COMMUNITIES, LOAD_COMMUNITY, LOAD_ALL_USERS, LOAD_USER } from '../constants'
import {replace} from 'react-router-redux'

export function selectCommunity(id) {
    return {
        type: SELECT_COMMUNITY,
        payload: { id }
    }
}

export function checkAndLoadAllCommunities() {
    return (dispatch, getState) => {
        const {communities} = getState()

        if (communities.loading || communities.loaded) return

        dispatch({
            type: LOAD_ALL_COMMUNITIES,
            callAPI: '/api/community'
        })
    }
}

export function checkAndLoadAllUsers() {
    return (dispatch, getState) => {
        const {users} = getState()

        if (users.loading || users.loaded) return

        dispatch({
            type: LOAD_ALL_USERS,
            callAPI: '/api/user'
        })
    }
}

export function loadUser(id) {
    return (dispatch, getState) => {
        dispatch({
            type: LOAD_USER,
            callAPI: `/api/user/${id}`,
            payload: { id }
        })
    }
}

export function loadCommunity(id) {
    return (dispatch, getState) => {
        dispatch({
            type: LOAD_COMMUNITY,
            callAPI: `/api/community/${id}`,
            payload: { id }
        })
    }
}

