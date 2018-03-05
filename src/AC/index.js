import {SELECT_COMMUNITY, LOAD_ALL_COMMUNITIES, LOAD_COMMUNITY, START, SUCCESS, FAIL} from '../constants'
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

export function loadCommunity(id) {
    return (dispatch, getState) => {
        const community = getState().communities.getIn(['items', id])

        if (community && (community.text || community.loading)) return

        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        })

        setTimeout(() => fetch(`/api/community/${id}`)
            .then(res => {
                if (res.status >= 400) throw new Error(res.statusText)
                return res.json()
            })
            .then(response => dispatch({
                type: LOAD_ARTICLE + SUCCESS,
                payload: { response, id }
            }))
            .catch(error => {
                dispatch({
                    type: LOAD_ARTICLE + FAIL,
                    payload: { error, id }
                })

                dispatch(push('/error'))
            })
        , 500)
    }
}

