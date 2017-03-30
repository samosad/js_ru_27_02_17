import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import {arrToMap} from './utils'
import {Record, Map} from 'immutable'

const CommentModel = Record({
    id: null,
    user: '',
    text: ''
})

const DefaultReducerState = Record({
    entities: new Map({}),
    total: 0,
    loading: false,
    error: null
})


export default (comments = new DefaultReducerState(), action) => {
    const { type, payload, response, error, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(randomId, new CommentModel({
                id: randomId,
                ...payload.comment
            }))

        case LOAD_COMMENTS + START:
            return comments.set('loading', true)

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return comments.mergeIn(['entities'], arrToMap(payload.response, CommentModel))

        case LOAD_COMMENTS + SUCCESS:
            return comments
                .set('loading', false)
                .set('total', response.total)
                .mergeIn(['entities'], arrToMap(response.records, CommentModel))

        case LOAD_COMMENTS + FAIL:
            return comments
                .set('loading', false)
                .set('error', error.statusText)
    }

    return comments
}