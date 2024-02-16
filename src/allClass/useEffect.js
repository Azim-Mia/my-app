import React, {useState,useEffect} from 'react'

const UseEffects=()=>{
const [count, setCount]=useState(0);
useEffect(()=>{
 // alert("useEffect.action.korbe")
},[count]);
const handleButton=()=>{
setCount(count+1);
}
return (
<div>
<p>useEffect part 1</p>
<p>{count}</p>
<button onClick={handleButton}>useEffectV39</button>
</div>
)
};
export default UseEffects;
