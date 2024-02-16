import React, {useReducer} from 'react';
import Users from './component1.js';
import NewUser from './newUser.js'
import UseCreateContext from './useContext.js';
import {initialStata, reducer} from './reducer.js';
const Usereducercontext=()=>{
  const [state,dispatch]=useReducer(reducer,initialStata);
 return (
   <UseCreateContext.Provider value={{state, dispatch}}>
     <NewUser />
   <Users />
   </UseCreateContext.Provider>
   ) 
}
export default Usereducercontext