import {START, SUCCESS, FAIL, HTTP_METHOD} from '../constants'

export default store => next => action => {
    const {callAPI, type, ...rest} = action
    if (!callAPI) return next(action)
    next({
        type: type + START,
        ...rest
    })

    switch (action.httpMethod) {
        case HTTP_METHOD.POST:
            fetch(callAPI, {
                method: HTTP_METHOD.POST,
                headers: {'Content-Type':'application/json'},
                body: action.payload
            })
                .then(res => res.json())
                .then(response => next({...rest, type: type + SUCCESS, response}))
                .catch(error => next({...rest, type: type + FAIL, error}))
            return
        default:
            fetch(callAPI)
                .then(res => res.json())
                .then(response => next({...rest, type: type + SUCCESS, response}))
                .catch(error => next({...rest, type: type + FAIL, error}))
    }


}