import {createSelector} from 'reselect'

export const getArticles = state => state.articles.entities
export const getFilters = state => state.filters
export const getComments = state => state.comments.entities
export const getId = (state, props) => props.id
export const getMatch = (state, props) => props.match
export const getTotalComments = state => state.comments.total

export const filteredArticlesSelector = createSelector(getArticles, getFilters, getFilteredArticles)

export const createFindCommentSelector = () => createSelector(getComments, getId,
    (comments, id) => {
        return comments.get(id)
    }
)

export const createMatchedArticleSelector = () => createSelector(getArticles, getMatch, 
    (articles, match) => articles.get(match.params.id)
)

function getFilteredArticles(articles, filters) {
    const { selected, dateRange: { from, to } } = filters

    return articles.valueSeq().toArray().filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
}

export const createCommentsPageSelector = () => createSelector(getComments, getTotalComments, getMatch,
    (comments, total, match) => comments.keySeq().toArray()

)