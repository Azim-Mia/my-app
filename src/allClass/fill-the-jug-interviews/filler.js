import React,{useState} from 'react';
import Jug from './jug.js';
const Filler = ()=>{
const [fillTheJug, setFillTheJug]=useState(0);
const fillJug =()=>{
setFillTheJug((prev)=>{
  if(prev === 0) return 1;
  const change = prev + prev * 0.4;
  if(change > 100) return 100;
  return change
});
}
const emptyJug =()=>{
  setFillTheJug((prev)=>{
  if(prev > 100) return 99;
  const change = prev - prev * 0.4;
  if(change < 0) return 1;
  return change
});
}
  return(<> 
  <div>
  <Jug fillData = {fillTheJug}/>
  </div>
  <div class="btnContainer">
<button onClick={fillJug} class="btn"><span>&#8593;</span></button>
<button onClick={emptyJug} className="bg-green-400 p-1text-3xl"><span>&#8595;</span></button>
  </div>
  </>)
}
export default Filler;