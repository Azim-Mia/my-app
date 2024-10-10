import {useState} from 'react';
import Component3 from './component3.js';
//import UserContext from './useContextHook.js';
const Component2=()=>{
const [datas,setDatas] =useState("");
const childDataAcceptParent =(text)=>{
setDatas(text)
}

return <div>
<p style ={{color:"blue", backgroundColor:"yellow"}}>{datas}</p>
  <Component3 onChildDataAcceptParent={childDataAcceptParent} /></div>
}
export default Component2