<<<<<<< HEAD
import React, {Component} from 'react'
import Comments from './Comments'

class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            isCommentsOpen: false
        }
    }

    render() {
        const {article} = this.props
        const {isOpen, isCommentsOpen} = this.state
        const body = isOpen ? <section>{article.text}</section> : null
        const comments = isOpen && Array.isArray(article.comments)
            ? <Comments
                comments={article.comments}
                isOpen={isCommentsOpen}
                onToggle={this.handleCommentsToggle}/>
            : null

        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {body}
                {comments}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleCommentsToggle = () => {
        this.setState({
            isCommentsOpen: !this.state.isCommentsOpen
        })
    }
=======
import React, {Component, PropTypes} from 'react'
import CommentList from './CommentList'

function Article(props) {
    const {article, isOpen, toggleOpen} = props
    const body = isOpen
        ? <section>
            {article.text}
            <CommentList comments={article.comments}/>
        </section>
        : null
    return (
        <div>
            <h3 onClick={toggleOpen}>{article.title}</h3>
            {body}
        </div>
    )
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        comments: PropTypes.array
    }).isRequired
>>>>>>> romabelka/master
}

export default Article
