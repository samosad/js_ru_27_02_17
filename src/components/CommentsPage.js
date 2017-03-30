import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList/index'
import Article from './Article/index'
import Loader from './Loader'
import Comment from './Comment'
import Pager from './Pager'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadComments} from '../AC'
import {commentsSelector} from '../selectors'

const LIMIT = 5

class CommentsPage extends Component {
    static propTypes = {

    };

    componentWillMount() {
        this.props.loadComments(LIMIT, this.getOffset(this.props.match.params.page))
    }

    componentWillReceiveProps({match, comments}) {
        const offset = this.getOffset(match.params.page)

        if (match.params.page !== this.props.match.params.page) {
            this.props.loadComments(LIMIT, offset)
        }
    }

    getPagesCount() {
        return Math.ceil(this.props.total / LIMIT)
    }

    getOffset(page) {
        return LIMIT * page
    }

    render() {
        const {match, loading, error} = this.props

        if (loading) {
            return <Loader />
        }

        return (
            <div>
                <h2>Comments:</h2>
                {this.getComments()}
                <Pager pages={this.getPagesCount()} path="/comments/"/>
            </div>
        )
    }

    getComments() {
        const {comments, match} = this.props
        const offset = this.getOffset(match.params.page)
        
        return comments.slice(offset, offset + LIMIT).map(id => <div key={id}>{id}) <Comment id={id} /></div>)
    }
}

function mapStateToProps(state, props) {
    return {
        comments: commentsSelector(state, props),
        total: state.comments.total,
        loading: state.comments.loading,
        error: state.comments.error
    }
}

const actions = {
    loadComments
}

export default connect(mapStateToProps, actions)(CommentsPage)