import React from 'react';
export default function Child(props){
  const datas="hello pust parent data";
  props.onChildData(datas);
  return (  <div>
    <h3>{props.name}</h3>
   <span>.............................</span> </div>
    )
}
