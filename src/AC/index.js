import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLES} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectArticles(selected) {
    return {
        type: SELECT_ARTICLES,
        payload: selected
    }
}