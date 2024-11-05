import {useState} from 'react';
import Child from './chaild'
const Perent =()=>{
  const [count, setCount] = useState(0);
  const incriment =()=>{
  setCount(count +1);
 }
  return (<>
  <div>
  <p>Incriment value use function lifting :{count}</p>
  <button onClick={incriment}>Perent</button>
  <Child count={count} onIncriment={incriment}/>
  </div>
  </>)
}
export default Perent;