import React,{useContext} from 'react';
import Component3 from './component3.js';
import UserContext from './useContextHook.js';
const Component2=()=>{
const user= useContext(UserContext)
return <div>
  {user.name}
  <Component3 /></div>
}
export default Component2