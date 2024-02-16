import React from 'react';
import {v4 as uuidv4} from 'uuid'
import Country from './country.js'
function Component(props){
  return <section>
  {props.countries.map((country)=>{
  const countryNew={country, id:uuidv4()}
const  handleRemoveCountry=(name)=>{
  props.onRemoveCountry(name)
}
  return <Country {...countryNew} key={countryNew.id} onRemoveCountry={handleRemoveCountry}/>
  })}
  </section>
}
export default Component;