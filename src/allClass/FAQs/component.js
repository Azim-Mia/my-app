import React, {useState} from 'react';
const Component=({id,title,desc,ans})=>{
  const [toggle, setToggle]=useState(false);
  return <div>
  <h1>{title}</h1>
    {toggle && <p>{ans}</p>}
    <button onClick={()=>{setToggle(!toggle)}}>{toggle ? "Show-Ans::":"Hite-Ans:"}</button>
  </div>

}
export default Component;