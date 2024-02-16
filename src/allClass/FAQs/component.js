import React, {useState} from 'react';
const Component=({id,title,desc})=>{
  const [toggle, setToggle]=useState(true);
  return <div>
  <h1>{title}</h1>
    {toggle && <p>{desc}</p>}
    <button onClick={()=>{setToggle(!toggle)}}>{toggle ? "Show-Ans:":"Hide-Ans:"}</button>
  </div>

}
export default Component;