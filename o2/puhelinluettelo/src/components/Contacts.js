import React from 'react';
import Contact from './Contact'

const contacts = (props) => {
    if(props.persons){
        return(
            <div>
                { props.persons.map((p) => {
                    return(
                        <Contact name={p.name} number={p.number} key={p.id} deleteButton={props.deleteButton} id={p.id}/>
                        // <p key={p.id}>
                        //     {p.name}: {p.number}
                        // </p>
                    )
                })}
            </div>
        )
    } else{
        return(
            <p>Loading...</p>
        )
    }
    
}

export default contacts;