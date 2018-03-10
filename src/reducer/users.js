import { LOAD_ALL_USERS, LOAD_USER, SUCCESS, START } from '../constants'
import {arrToMap} from './utils'
import {Record} from 'immutable'

const UserRecord = Record({
    id: null,
    firstname: null,
    lastname: null,
    loading: false,
    createdDate: null,
    modifiedDate: null,
    communityCount: 0
})

const ReducerRecord = Record({
    items: arrToMap([], UserRecord),
    loading: false,
    loaded: false
})

const defaultState = new ReducerRecord()

export default (state = defaultState, action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case LOAD_ALL_USERS + START:
            return state.set('loading', true)

        case LOAD_ALL_USERS + SUCCESS:
            return state
                .set('loading', false)
                .set('loaded', true)
                .set('items', arrToMap(response, UserRecord))

        case LOAD_USER + START:
            return state.setIn(['items', payload.id, 'loading'], true)

        case LOAD_USER + SUCCESS:
            return state.setIn(['items', payload.id], new UserRecord(payload.response))
    }

    return state
}