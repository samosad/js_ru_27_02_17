import React, { Component, PropTypes } from 'react'
import ArticlesSelect from './ArticlesSelect'
import DateRange from './DateRange'
import {connect} from 'react-redux'

class Filters extends Component {
    render() {
        const {articles, filters} = this.props
        return (
            <div>
                <ArticlesSelect articles={articles} selected={filters.selected}/>
                <DateRange from={filters.from} to={filters.to}/>
            </div>
        )
    }
}

export default connect((state) => ({
    articles: state.articles,
    filters: state.filters
}))(Filters)