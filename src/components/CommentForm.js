import React from 'react'

class CommentForm extends React.Component {
    static propTypes = {
        onSubmit: React.PropTypes.func.required
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
        this.setState({
            user: event.target.value
        })
    };

    handleTextChange = (event) => {
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
                        <textarea name="text" cols="30" rows="10" value={text} onChange={this.handleTextChange}/>
                    </label>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default CommentForm