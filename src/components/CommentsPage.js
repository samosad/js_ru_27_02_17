import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList/index'
import Article from './Article/index'
import Loader from './Loader'
import Comment from './Comment'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadComments} from '../AC'
import {createCommentsPageSelector} from '../selectors'

class CommentsPage extends Component {
    static propTypes = {

    };

    componentWillMount() {
        this.props.loadComments(5, 10)
    }

    componentWillReceiveProps({match}) {
        if (match.params.page !== this.props.match.params.page) {
            this.props.loadComments(5, 10)
        }
    }

    render() {
        const {match, loading, error} = this.props

        if (loading) {
            return <Loader />
        }

        return (
            <div>
                <ul>
                    {this.getComments()}
                </ul>
            </div>
        )
    }

    getComments() {
        return this.props.comments.map(id => <li key={id}><Comment id={id} /></li>)
    }
}

function mapStateToProps(state, props) {
    const commentsPageSelector = createCommentsPageSelector()

    return {
        comments: commentsPageSelector(state, props),
        loading: state.comments.loading,
        error: state.comments.error
    }
}

const actions = {
    loadComments
}

export default connect(mapStateToProps, actions)(CommentsPage)