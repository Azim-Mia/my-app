import React from 'react';
import User from './user.js';
// this is hook
import useUserContextHook from './hook.js';
const Users=()=>{
  const {users}=useUserContextHook();
return (
  <section>
  {
    users.map(user => <User key={user.id} user={user} />)
  }
  </section>
  )
}
export default Users;