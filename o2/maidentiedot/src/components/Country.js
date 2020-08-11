import React from 'react';
import Weather from './Weather';

const country = (props) =>{
    
    const flagStyle = {
        maxWidth: 150,
        border: "1px solid grey"
    }
    return(
        <div>
            <h3>{props.name}</h3>
            
            <p>
                capital: {props.capital}
            </p>

            <p>
                population: {props.population}
            </p>
        
            <h4>languages</h4>
            <ul>
                {props.languages.map((l, i) => <li key={props.name + i}>{l.name}</li>)}
            </ul>

            <img src={props.flag} style={flagStyle} alt={`flag of ${props.name}`}/>
            
            <Weather location={props.capital}/>
        
        </div>
    )
}

export default country;