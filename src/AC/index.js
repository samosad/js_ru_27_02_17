import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLES, SET_DATE_RANGE} from '../constants'

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

export function setDateRange({from, to}) {
    return {
        type: SET_DATE_RANGE,
        payload: {from, to}
    }
}