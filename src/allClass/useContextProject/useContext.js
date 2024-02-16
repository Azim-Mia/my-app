import React,{useState} from 'react';
import Users from './users.js';
import Newuser from './newUser.js'
import AddContext from './createContext.js'
const Usecontextreducer=()=>{
  const [users, setUser]=useState([
    {id:101, name:"Azim mia"},
    {id:102, name:"karim mia"},
    ])
return (
 <AddContext.Provider value={{users,setUser}}>
   <div>
   <Newuser />
  <Users />
  </div>
 </AddContext.Provider>
  )  
}
export default Usecontextreducer;