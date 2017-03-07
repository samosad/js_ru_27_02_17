export default {
    getInitialState() {
        return {
            isOpen: false // this.props.defaultOpen
        }
    },
    toggleOpen(ev) {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}