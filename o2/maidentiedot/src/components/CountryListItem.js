import React from 'react';

const countryListItem = (props) => {
    return(
        <p>
            {props.name} <button value={props.name} onClick={props.onClick}>show</button>
        </p>
    )
}

export default countryListItem;