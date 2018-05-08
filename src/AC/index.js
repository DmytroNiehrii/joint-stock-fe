import { LOAD_ALL_COMMUNITIES, LOAD_COMMUNITY, LOAD_ALL_USERS, LOAD_USER, UPDATE_COMMUNITY, HTTP_METHOD } from '../constants'
import {replace} from 'react-router-redux'

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

export function loadCommunity(id) {
    return (dispatch, getState) => {
        dispatch({
            type: LOAD_COMMUNITY,
            callAPI: `/api/community/${id}`,
            payload: { id }
        })
    }
}

export function saveCommunity(data) {
    return (dispatch, getState) => {
        dispatch({
            httpMethod: HTTP_METHOD.POST,
            type: UPDATE_COMMUNITY,
            callAPI: `/api/community/save`,
            payload: data
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


