import React from 'react';
var bc=[
  {
  name:"video i5",
  title:"Function Component"
}
];
 function CardF1(){
  return (<div>
  {
    bc.map((n)=><article>
    <h1>{n.name}</h1>
       <h1>{n.title}</h1> 
    </article>)
  }
  <video src="" controls="control">
 </video>
  </div>
    )
}
export default CardF1;