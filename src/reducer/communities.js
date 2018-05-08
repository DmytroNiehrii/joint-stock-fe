import { DELETE_COMMUNITY, LOAD_ALL_COMMUNITIES, UPDATE_COMMUNITY, SUCCESS, START } from '../constants'
import {arrToMap} from './utils'
import {Record} from 'immutable'

const CommunityRecord = Record({
    id: null,
    name: null,
    description: null,
    loading: false,
    createdDate: null,
    modifiedDate: null,
    createdBy: null,
    memberCount: 0
})

const ReducerRecord = Record({
    items: arrToMap([], CommunityRecord),
    loading: false,
    loaded: false
})

const defaultState = new ReducerRecord()

export default (state = defaultState, action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case DELETE_COMMUNITY:
            return state.deleteIn(['items', payload.id])

        case LOAD_ALL_COMMUNITIES + START:
            return state.set('loading', true)

        case LOAD_ALL_COMMUNITIES + SUCCESS:
            return state
                .set('loading', false)
                .set('loaded', true)
                .set('items', arrToMap(response, CommunityRecord))

        case UPDATE_COMMUNITY + SUCCESS:
            return state.setIn(['items', payload.id], payload)
    }

    return state
}