import { DELETE_COMMUNITY, LOAD_ALL_COMMUNITIES, LOAD_COMMUNITY, SUCCESS, START } from '../constants'
import {arrToMap} from './utils'
import {Record} from 'immutable'

const CommunityRecord = Record({
    id: null,
    name: null,
    description: null,
    loading: false,
    createdDate: null,
    modifiedDate: null
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
                .set('items', arrToMap(response.content, CommunityRecord))

        case LOAD_COMMUNITY + START:
            return state.setIn(['items', payload.id, 'loading'], true)

        case LOAD_COMMUNITY + SUCCESS:
            return state.setIn(['items', payload.id], new CommunityRecord(payload.response))
    }

    return state
}