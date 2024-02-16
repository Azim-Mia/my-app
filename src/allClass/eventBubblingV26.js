import React from 'react'

function EventEffectSolve(){
 const parent=(event)=>{
  
   console.log(event);
   alert("parent")
 }
 const child=(event)=>{
   event.stopPropagation()
   console.log(event);
   alert("child");
 }
  return (
    <div style={{height:"200px", width:"920px", color:"blue",background:"yellow"}} onClick={parent}>
    <h1 style={{textAlign:"center"}}onClick={child}>child</h1>
    </div>
    )
}
export default EventEffectSolve