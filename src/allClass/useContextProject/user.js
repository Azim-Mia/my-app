import React from 'react';
// this is hook
import useUserContextHook from './hook.js';
const User=({user})=>{
  const {users,setUser}=useUserContextHook();
  const {id, name}=user;
  const handleDelete=(id)=>{
    const filterUser=users.filter(user => user.id !== id);
    setUser(filterUser)
    }
return (
  <article>
  <p>{id}</p>
    <p>{name}</p>
    <button onClick={()=>{handleDelete(id)}}>Delete Item</button>
  </article>
  )  
}
export default User;