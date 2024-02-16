import React, {useState} from 'react';
import Component2 from './component2.js';
import UserContext from './useContextHook.js'
const Component1=()=>{
  const [user]=useState({id:101,name:"Azim islam"})
return <div>
<UserContext.Provider value={user}>
<Component2 />
</UserContext.Provider>
</div>
}
export default Component1