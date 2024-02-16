import React, {useContext} from 'react';
import UseCreateContext  from './useContext.js'
 const User=({user})=>{
   const {state,dispatch}=useContext(UseCreateContext);
   const {id, name}=user;
  const handleDelete=(id)=>{
dispatch({type:"REMOVE_USER", payload:id})
  }
   return ( <div>
     <article>
     {id} <br/>
     {name}
     <button onClick={()=>{handleDelete(id)}}>Delete_Itemy</button>
     </article>
  <h1>{state.message}</h1>
     </div>)
 }
 export default User