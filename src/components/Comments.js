import React from 'react'

export default (props) => {
    const {
        comments,
        isOpen,
        onToggle
    } = props

    const listItems = comments.map(({ id, user, text}) => {
        return (
            <li key={id}><b>{user}</b>: <span>{text}</span></li>
        )
    })

    return (
        <div>
            <p><button onClick={onToggle}>{isOpen ? 'Hide' : 'Show'} comments</button></p>
            {isOpen ? <ol>{listItems}</ol> : null}
        </div>
    );
}

