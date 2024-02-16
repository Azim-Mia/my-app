import React, {useContext} from 'react';
 import User from './user.js';
import UseCreateContext from './useContext.js';
 const Users=()=>{
   const {state}=useContext(UseCreateContext)
   return (
     <section>
     {state.userrs.map((user)=>{
     return <User  user={user} />
     })}
     </section>
     )
     }
 export default Users