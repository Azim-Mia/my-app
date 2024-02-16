import React, {useState} from 'react'
function StateHooks(){
 const [count,setCount]=useState(100)
  const hooks=()=>{
    setCount(count-1);
  }
  return (
    <div>
    <h2>{count}</h2>
    <button onClick={hooks}>useStateHooksincriment</button><hr/></div>
    )
}
export default StateHooks;