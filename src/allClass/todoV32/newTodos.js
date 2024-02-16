import React, {useState} from 'react';
function NewTodoAddMethot(props){
  const [newTodo, setTodo]=useState('')
  const handleChange=(event)=>{
    setTodo(event.target.value)
  }
  const submit=(event)=>{
    event.preventDefault();
    const c=document.querySelector('#todo')
    const bt=document.querySelector('#bt')

    if(c.value===""){
      bt.disabled=true;
    }
  props.onTodoAdd(newTodo);
  }
  return( <div>
    <h1 style={{textAlign:"center"}}>{newTodo}</h1>
  <form onSubmit={submit}>
  <input type="text" id="todo" name="newTodo" value={newTodo} onChange={handleChange}/>
  <button id="bt">AddTodo</button>
  </form>
  </div>)
}
export default NewTodoAddMethot;