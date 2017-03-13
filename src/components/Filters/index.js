import React, { Component, PropTypes } from 'react'
import ArticlesSelect from './ArticlesSelect'
import DateRange from './DateRange'
import {connect} from 'react-redux'
import {selectArticles, setDateRange} from '../../AC'

class Filters extends Component {
    render() {
        const {articles, filters, selectArticles, setDateRange} = this.props
        return (
            <div>
                <ArticlesSelect articles={articles} selected={filters.selected} onChange={selectArticles}/>
                <DateRange from={filters.from} to={filters.to} onChange={setDateRange}/>
            </div>
        )
    }
}

export default connect((state) => ({
    articles: state.articles,
    filters: state.filters
}), {
    selectArticles,
    setDateRange
})(Filters)