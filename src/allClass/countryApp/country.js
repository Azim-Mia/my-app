import React from 'react';
const Country=(props)=>{
  const {country}=props;
  const {name, flags, capital, population,area}=country
  const handleRemoveCountry=(name)=>{
    props.onRemoveCountry(name)
  }
  return <article>
  <div>
  <img src={flags.png} alt={name.common}/>
  <h1>Name of Country: {name.common}</h1>
  <h1>Capital: {capital}</h1>
  <p>population code: {population}</p>
    <p>Area Code: {area}</p>
    <button onClick={()=>{handleRemoveCountry(name.common)}}>Remove-Country</button>
  </div>
  </article>
}
export default Country;