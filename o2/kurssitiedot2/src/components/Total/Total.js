import React from 'react'

const total = (props) => {
    
    const totalExcercises = props.parts.reduce((sum, part) => {
        return sum += part.exercises;
    }, 0)
    
   // console.log("total: ", totalExcercises);

    return(
        <div>
            <p>Number of exercises {totalExcercises}</p>
        </div>
    )
}

export default total;