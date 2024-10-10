import React from 'react';
import withComponent from './withComponent';
const HeigherOrderComponent =(props)=>{
const {count,incriment,decrincriment}=props;
  return (<div>
 <button onClick={incriment}>+</button>
  <button onClick={decrincriment}>-</button>
   <p>Result:{count}</p>
  </div>)
}
export default withComponent(HeigherOrderComponent)