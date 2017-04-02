import React, { Component, PropTypes } from 'react'
import MenuItem from './MenuItem'
import locale from '../../locale'

class Menu extends Component {
    static propTypes = {

    };

    static contextTypes = {
      language: PropTypes.string
    };

    render() {
        return (
            <div>
                <h3>{locale[this.context.language].header.Menu}</h3>
                {this.props.children}
            </div>
        )
    }
}

export { MenuItem }
export default Menu