import React, {useState, useEffect} from 'react';
import './App.css';
import './components/SearchForm';
import SearchForm from './components/SearchForm';
import CountryListing from './components/CountryListing';
import axios from 'axios';

function App() {
  
  // All countries data
  const [countries, setCountries] = useState([]);

  // Current search
  const [country, setCountry] = useState('');

  // Filtered results
  const [filteredCountryList, setFilteredCountryList] = useState([]);


  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(res => {
      setCountries(res.data);
    })
    .catch(err => {
      console.log('oops... ', err);
    })
  },[])
  
  // Handlers

  const handleCountrySearchInput = (event) =>{
    event.preventDefault();
    filterResults(event.target.value);
    setCountry(event.target.value);
  }

  const filterResults = (search) =>{
    const results = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()));
    setFilteredCountryList(results);
  }

  const handleShowCountryButtonClick = (event) =>{
    filterResults(event.target.value);
    setCountry('');
  }

  return (
    <div>
      <h1>CountryApp</h1>
      <SearchForm value={country} onChange={handleCountrySearchInput}/>
      <hr />
      <CountryListing 
        countries={filteredCountryList} 
        showButtonClick={handleShowCountryButtonClick}
      />
    </div>
  );
}

export default App;
