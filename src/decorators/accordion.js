import React from 'react'

export default (Component) => class AccorionDecoratedComponent extends React.Component {
    state = {
        openItemId: null
    }

    toggleOpenItem = (openItemId) => (ev) => {
        ev.preventDefault()
        this.setState({
            openItemId
        })
    }

    render() {
        return (
            <Component {...this.props} {...this.state} toggleOpenItem={this.toggleOpenItem}/>
        )
    }
}
