import React, {PropTypes, Component} from 'react'
import Article from './Article'

export default class ArticleList extends Component {
    state = {
        openArticleId: null
    }

    render() {
        const {articles} = this.props

        const articleComponents = articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === this.state.openArticleId}
                     toggleOpen={this.toggleOpenArticle(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleComponents}
            </ul>
        )
    }

    toggleOpenArticle = openArticleId => ev => {
        this.setState({
            openArticleId
        })
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}