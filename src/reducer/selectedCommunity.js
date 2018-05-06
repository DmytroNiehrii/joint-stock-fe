import { LOAD_COMMUNITY, SUCCESS, START } from '../constants'
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
    id: null,
    data: null,
    loading: false,
    loaded: false
})

const defaultState = new ReducerRecord()

export default (state = defaultState, action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case LOAD_COMMUNITY + START:
            return state 
                .set('id', payload.id)
                .set('loading', true)
                .set('loaded', false)

        case LOAD_COMMUNITY + SUCCESS:
            return state
                .set('loading', false)
                .set('loaded', true)
                .set('data', response)
    }

    return state
}