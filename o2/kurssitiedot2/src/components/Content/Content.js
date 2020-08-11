import React from 'react'

const content = (props) => {
    return(
        <div>
            {props.parts.map((part) => {
                return(
                    <p key={part.id}>
                        {part.name} {part.exercises}
                    </p>
                )
            })}
        </div>
    )
}

export default content;