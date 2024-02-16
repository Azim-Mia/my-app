import React, {useState} from 'react'
function PriviousState(){
 const [count,setCount]=useState(0)
  const hook=()=>{
   setCount((count)=>count+1);
    setCount((count)=>count+1);
   setCount((count)=>count+1);
  }
  return (
    <div>
    <h2>{count}</h2>
    <button onClick={hook}>useStateHooksincriment</button><hr/></div>
    )
}
export default PriviousState;