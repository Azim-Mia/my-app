import React, {useState, useEffect} from 'react';
import './index.css';
const Jug =({fillData})=>{
const [lableChaange, setLableChange] =useState(false);
//animation time set..
useEffect(()=>{
  setLableChange(true);
  const timeoutId =setTimeout(()=>{
    setLableChange(false);
  },3000);
  //clear setTime out
return ()=>{
  clearTimeout(timeoutId);
}
},[fillData]);
  return(<>
  <div className="flex w-[100px] h-[200px] rounded-md border-2 border-t-0 center relative overflow-hidden">
<div className={`w-full h-1/2 bg-pink-400 text-center absolute bottom-0 opacity-7 rounded-b-s rounded-t-s ${lableChaange && "animate-wave"}`} style={{height:`${fillData}%`}}>
<span className="animate-pulse">{Math.round(fillData)}%</span>
</div>
</div>
  </>)
};
export default Jug;