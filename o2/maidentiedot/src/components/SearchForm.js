import React from 'react';

const searchForm = (props) => {
    return(
        <form>
            <label>find countries: </label>
            <input value={props.value} onChange={props.onChange}/>
        </form>
    )
}

export default searchForm;