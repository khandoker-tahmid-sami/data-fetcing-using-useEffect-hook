import React, {useState, useEffect} from 'react';
import Countries from './components/countries';
import Search from './components/search';
import './App.css';


const url = "https://restcountries.com/v3.1/all"
function App() {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  // console.log(countries)
  const fetchData = async (url) =>{
    setIsLoading(true);
    try{
      const response = await fetch(url)
      const data = await response.json()
      setCountries(data)
      setFilteredCountries(data)
      setIsLoading(false)
      setError(null)
    }catch(error){
      setIsLoading(false)
      setError(error)
    }
  }
  useEffect(()=>{
    fetchData(url)
  },[])

  const handleRemove = (name) =>{
    const filter = filteredCountries.filter(country =>{
      return country.name.common != name;
    })
    setFilteredCountries(filter)
  }

  const handleSearch = (value) =>{
    let newValue = value.toLowerCase()
    const newCountries = countries.filter(country =>{
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(newValue)
    })
    setFilteredCountries(newCountries)
  } 
  return (
    <div>
      <h1>Country Information</h1>
      <Search onSearch={handleSearch}/>
      {isLoading && <h4>Data is loading</h4>}
      {error && <h4>Fetching is not possible</h4>}
      {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemove}/>}
    </div>
  );
}

export default App;
