import React from 'react'

const content = (props) => {
    return(
        <div>
            <p>
            {props.parts[0].name} {props.parts[0].exercises}
        </p>
        <p>
            {props.parts[1].name} {props.parts[0].exercises}
        </p>
        <p>
            {props.parts[2].name} {props.parts[2].exercises}
        </p>
        </div>
    )
}

export default content;