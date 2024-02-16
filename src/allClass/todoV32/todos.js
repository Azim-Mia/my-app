import React from 'react';
import Todo from './todo.js';
function Todos(props){
  return (
    <div>
  {
    props.Todos.map((todo, index)=>
     <Todo key={index} todo={todo}/>
    )
  }
    </div>
    )
}
export default Todos;