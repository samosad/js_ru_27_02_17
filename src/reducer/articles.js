import {normalizedArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

export default (state = normalizedArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.filter(article => article.id !== payload.id)
        case ADD_COMMENT:
            const articleIndex = state.findIndex(a => a.id === payload.articleId)
            const newState = [...state]
            newState[articleIndex].comments.push(payload.id)
            return newState
    }

    return state
}