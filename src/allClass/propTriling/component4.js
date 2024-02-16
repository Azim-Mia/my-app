import React, {useContext} from 'react';
import UserContext from './useContextHook.js';
const Component4=()=>{
  const user= useContext(UserContext)
  return <div>
  {user.id}
    </div> 
}
export default Component4;