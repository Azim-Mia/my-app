import React from 'react';
import withComponent from './withComponent';
const HoverMouse =(props)=>{
const {count,incriment}=props;
  return (<div>
    <h1 onMouseOver={incriment}>Mouse Hover Out count</h1>
    <p>{count}</p>
  </div>)
}
export default  withComponent(HoverMouse)