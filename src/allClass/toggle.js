import React, {useState} from 'react';
const Toggle=()=>{
  const [toggle, setToggle]=useState(true);
  return <div>
  <p>Toggle Video</p>
 {toggle && <h3 style={{background:"yellow"}}>Bangladesh is a small country</h3>}
  <button onClick={()=>{setToggle(!toggle)}}>{toggle ? "Show": "Hide"}</button>

  </div>
}
export default Toggle;