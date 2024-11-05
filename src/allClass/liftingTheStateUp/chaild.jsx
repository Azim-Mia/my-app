import React from 'react';
const Child =({count, onIncriment})=>{
  return (<>
  <div>
  <p>Incriment value use function lifting :{count}</p>
  <button onClick={onIncriment}>Child</button>
  </div>
  </>)
}
export default Child;