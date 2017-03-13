import {SELECT_ARTICLES} from '../constants'

const defaultState = {
    from: '',
    to: '',
    selected: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case SELECT_ARTICLES:
            return Object.assign({}, state, {
                selected: action.payload
            })
    }
    return state
}
