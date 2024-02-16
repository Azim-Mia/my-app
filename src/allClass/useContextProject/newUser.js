import React, {useState} from 'react';
// this is hook
import useUserContextHook from './hook.js';
const Newuser=()=>{
  const [userData, setUserData]=useState("")
  const {setUser}=useUserContextHook();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newUser= {id:new Date().getTime().toString(), name:userData}
  setUser((privius)=>[...privius,newUser])
  }
return <div>
<form onSubmit={handleSubmit}>
<input type="text" value={userData} onChange={(e)=>setUserData(e.target.value)}/>
<button type="submit">addUser</button>
</form>
  </div>
}
export default Newuser;