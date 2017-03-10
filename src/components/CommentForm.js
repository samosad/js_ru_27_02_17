import React, {Component, PropTypes} from 'react'

class CommentForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

    state = {
        user: '',
        text: ''
    };

    handleSubmit = (event) => {
        if (event && event.preventDefault) {
            event.preventDefault()
        }

        this.props.onSubmit(this.state)
    };

    handleUserChange = (event) => {
        if (event.target.value.length > 10) {
            return
        }
        this.setState({
            user: event.target.value
        })
    };

    handleTextChange = (event) => {
        if (event.target.value.length > 150) {
            return
        }
        this.setState({
            text: event.target.value
        })
    };

    render() {
        const {user, text} = this.state;

        return (
            <form action="#" method="post" onSubmit={this.handleSubmit}>
                <div>
                    <label>User:<br/>
                        <input name="user" type="text" value={user} onChange={this.handleUserChange}/>
                    </label>
                </div>
                <div>
                    <label>Comment:<br/>
                        <textarea name="text" cols="30" rows="5" value={text} onChange={this.handleTextChange}/>
                    </label>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default CommentForm