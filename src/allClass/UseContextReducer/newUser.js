import React, {useContext,useState} from 'react';
import UseCreateContext from './useContext.js';
const NewUser=()=>{
  const [addUser, setAddUser]=useState("")
  const {dispatch}=useContext(UseCreateContext)
   const handleSubmit=(e)=>{
     e.preventDefault();
     setAddUser("");
     const newUsers= {id:new Date().getTime().toString(), name:addUser}
     dispatch({type:"ADD_USER", payload:newUsers})
   }
   return (
<div><form onSubmit={handleSubmit}>
<input type="text" value={addUser} onChange={(e)=>{setAddUser(e.target.value)}}/>
<button type="submit">Add_User</button>
</form></div>
     )
     }
 export default NewUser