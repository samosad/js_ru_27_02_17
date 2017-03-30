import React, {Component, PropTypes} from 'react'
import {NavLink} from 'react-router-dom'

class Pager extends Component {
    static propTypes = {
        pages: PropTypes.number.isRequired,
        path: PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                Pages: {this.getPageLinks()}
            </div>
        )
    }

    getPageLinks() {
        const {pages, path} = this.props
        let pageLinks = [];

        for (let i = 0; i < parseInt(pages, 10); i++) {
            pageLinks.push(<NavLink to={path + i} activeClassName="active">{i + 1} | </NavLink>)
        }

        return pageLinks
    }
}

export default Pager