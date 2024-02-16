import {useContext} from 'react'
import AddContext from './createContext.js';
const useUserContextHook=()=>{
  return useContext(AddContext);
}
export default useUserContextHook