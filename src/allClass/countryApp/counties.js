import React, {useState, useEffect} from 'react';
import Component from './component.js'
import Search from './search.js'
const url="https://restcountries.com/v3.1/all"
function CountryApp(){
  const [countries, setCountries]=useState([]);
  const [filteredCountries, setFilteredCountries]=useState(countries);
  const [isLoding, setLoading]=useState(true);
  const [error, setError]=useState(null);
  const fetchData=async(url)=>{
try{
    setLoading(true)
   const  responce= await fetch(url)
   const data= await responce.json();
   setCountries(data);
   setFilteredCountries(data)
   setLoading(false);
}catch(error){
  setLoading(false);
  setError(error)
}
  }
  
  useEffect(()=>{
    fetchData(url)
  },[])
  
  const handleRemoveCountry=(name)=>{
    const filter=filteredCountries.filter((country)=>country.name.common !== name)
  setFilteredCountries(filter)
  }
  const handleSearch=(searchValue)=>{
    let value=searchValue.toLowerCase();
   const newCountris = countries.filter((country)=>{
    const countryName= country.name.common.toLowerCase();
    return countryName.startsWith(value)
    })
    setFilteredCountries(newCountris);
  }
  return <div>
  <Search onSearch={handleSearch} />
  <h1>hello Country</h1>
  {isLoding && <h1>Data is loading..</h1>}
    {error && <h1>{error.message}</h1>}
    {countries && <Component key={countries.id} countries={filteredCountries} onRemoveCountry={handleRemoveCountry} />}
  </div>
}
export default CountryApp;