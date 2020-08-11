import React from 'react';

const contact = (props) => {
    return(
        <p >
            {props.name}: {props.number} <button onClick={props.deleteButton} value={props.id}>delete</button>
        </p>
    )
}

export default contact;