import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {increment} from '../AC/index'
import {Redirect} from 'react-router-dom'
import locale from '../locale'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number
    };

    static contextTypes = {
        language: PropTypes.string
    };

    render() {
        const {count} = this.props
        if (count > 5) return <Redirect to="/filters"/>
        return (
            <div>
                <h3>{locale[this.context.language].header.Count}: {count}</h3>
                <a href="#" onClick={this.handleIncrement}>{locale[this.context.language].label.Increment}</a>
            </div>
        )
    }

    handleIncrement = (ev) => {
        ev.preventDefault()
        this.props.dispatchIncrement()
    }
}

export default connect(state => ({
    count: state.count
}), {
    dispatchIncrement: increment
})(Counter)