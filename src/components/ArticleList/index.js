import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import Article from '../Article/index'
import CSSTransition from 'react-addons-css-transition-group'
import accrdion from '../../decorators/accordion'
import './style.css'

class ArticleList extends Component {
    isArticleVisible = (article) => {
        const {from, to, selected} = this.props.filters
        const selectedIds = selected.map(option => option.value)
        const articleDate = new Date(article.date)

        if (selectedIds.length && !selectedIds.includes(article.id)) {
            return false
        }
        if (from && from > articleDate) {
            return false
        }
        if (to && to < articleDate) {
            return false
        }
        return true
    }

    render() {
        const {articles, toggleOpenItem, isItemOpened} = this.props

        const articleComponents = articles.filter(this.isArticleVisible).map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={isItemOpened(article.id)}
                     toggleOpen={toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <CSSTransition component="ul"
                           transitionName="article-list"
                           transitionAppear={true}
                           transitionAppearTimeout={100}
                           transitionEnterTimeout={500}
                           transitionLeaveTimeout={300}
            >
                {articleComponents}
            </CSSTransition>
        )
    }
}

const mapStateToProps = state => {
    console.log('---', 'connect, state = ', state)
    return {
        articles: state.articles,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(accrdion(ArticleList))

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isItemOpened: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired,
    filters: PropTypes.object.isRequired
}