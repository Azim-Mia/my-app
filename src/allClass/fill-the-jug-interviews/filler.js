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
  <div className= "flex justify-center mt-4">
  <Jug fillData = {fillTheJug}/>
  </div>
  <div class="btnContainer">
<button onClick={fillJug} class="bg-green-400 p-2 rounded-full text-3xl m-2"><span>&#8593;</span></button>
<button onClick={emptyJug} className="bg-green-400 p-2 rounded-full text-3xl text-center"><span>&#8595;</span></button>
  </div>
  </>)
}
export default Filler;