import React from 'react';

const filter = (props) => {
    return(
        <form>
            filter: <input value={props.filter} onChange={props.onChange}/>
        </form>
    )
}

export default filter;