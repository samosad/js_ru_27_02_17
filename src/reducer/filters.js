import {SELECT_ARTICLES, SET_DATE_RANGE} from '../constants'

const defaultState = {
    from: null,
    to: null,
    selected: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case SELECT_ARTICLES:
            return Object.assign({}, state, {
            //а здесь лучше просто id хранить, а не все что в Select приходит
                selected: action.payload
            })

        case SET_DATE_RANGE:
            return Object.assign({}, state, {
                from: action.payload.from || null,
                to: action.payload.to || null,
            })
    }
    return state
}
