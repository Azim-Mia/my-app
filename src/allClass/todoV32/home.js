import React, {useState} from 'react';
import Todos from './todos.js';
import NewTodoAddMethot from './newTodos.js';
const daynamiTodos=["todo1","todo2"];
function TodoHome(props){
const [todos, setTodos]=useState(daynamiTodos)
  const handleTodo=(dataAdd)=>{
    setTodos([...todos, dataAdd])
  }
  
  return(
    <div>
    <i className="fa fa-facebook">Facebook</i>
      <p className="fa fa-facebook">Facebook</p>
   <NewTodoAddMethot onTodoAdd={handleTodo} />
    <div><Todos Todos={todos}/>
    
    </div>
    
    </div>
    )
}
export default TodoHome;