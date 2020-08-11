import React from 'react';
// Full country info
import Country from './Country';
// Short version of country info (name and 'show' button) for listing purposes.
import CountryListItem from './CountryListItem';

const countryListing = (props) => {
    //console.log('props: ', props);
    if(props.countries.length > 10){
        return(
            <p>
                Too many countries found ({props.countries.length}). Please tighten your search.
            </p>
        )
    } else if(props.countries.length < 10 && props.countries.length > 1){
        const countriesList = props.countries.map(c => { 
            //return <p key={c.name}>{c.name}</p>;
            return <CountryListItem name={c.name} key={c.name} onClick={props.showButtonClick}/>
        });
        
        return(
            countriesList
        )
    } else if(props.countries.length === 1){
        return(
            <Country 
                name={props.countries[0].name}
                capital={props.countries[0].capital} 
                population={props.countries[0].population}
                languages={props.countries[0].languages}
                flag={props.countries[0].flag}
            />
        )
    } else{
        return(
            <p>
                Start typing a country name to search input.
            </p>
        )
    }

    
}

export default countryListing;