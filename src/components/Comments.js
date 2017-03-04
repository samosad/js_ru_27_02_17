import React from 'react'

export default (props) => {
    const {
        comments
    } = props

    const listItems = comments.map(({ id, user, text}) => {
        return (
            <li key={id}><b>{user}</b>: <span>{text}</span></li>
        )
    })

    return (
        <div>
            <h4>Comments:</h4>
            <ol>
                {listItems}
            </ol>
        </div>
    );
}

