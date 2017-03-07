import React  from 'react'

function Comment(props) {
    const { text, user } = props.comment
    return (
        <div>
            <p>{text} <b>by {user}</b></p>
        </div>
    )
}

export default Comment