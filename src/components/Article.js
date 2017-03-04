import React, {Component} from 'react'
import CommentList from './CommentList'

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
            ? <CommentList
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
}

export default Article
