import React, {useState} from 'react';
import Style2 from './css/newtodo.module.css'
 function NewTodo(props){
const [todo, setTodo]= useState({title:"", desc:""})
const {title, desc}=todo
const handleEvent=(event)=>{
  const name=event.target.name;
  setTodo((oldTodo)=>{return {...oldTodo,[name]: event.target.value}
    
  });
   }   
   const handleSubmit=(event)=>{
  event.preventDefault();
setTodo({title:"", desc:""});
if(event.target.value===""){
  
}
   props.onAccessData(todo);
   }
  
  return (<div>
 <h1>{title}</h1>
  <h1>{desc}</h1>
<form onSubmit={handleSubmit} className={Style2.form}>
<div>
<lable className={Style2.text} id="todoTitle">Title:  </lable><input className={Style2.input} type="text" onChange={handleEvent} id="title" name="title" value={title}/>
</div>
<div>
<lable className={Style2.textA} id="todoDesc">Desc:  </lable><textarea className={Style2.inputDesc} onChange={handleEvent} id ="todoDesc" name="desc" value={desc}/>
</div>
<button className={Style2.button}>AddTodo</button>
</form>
   </div> )
}
export default NewTodo;