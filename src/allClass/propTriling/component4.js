import React, {useContext} from 'react';
import UserContext from './useContextHook.js';
const Component4=({onChildDataAcceptParent})=>{
  const user= useContext(UserContext)
  onChildDataAcceptParent("This is child data accept Parent")
  return <div>
  {user.id}
    </div> 
}
export default Component4;