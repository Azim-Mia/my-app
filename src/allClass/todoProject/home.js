import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Todos from './todos.js'
import NewTodo from './newTodo.js'
import Style from './css/home.module.css'
function ProjectTodo(props){
  const [todos, setTodo]=useState([]);
  const handletodo=(todo)=>{
 setTodo((previous)=>{
   return [...previous, { id:uuidv4(), todo }];
 });
  }
  function handleRemoveTodo(id){
  /*const folteredTodo=todos.filter((todo)=> todo.id !== id)
  return setTodo(folteredTodo);*/
  //other niyom...
  setTodo((previousTodo)=>{
   const filteredTodo=previousTodo.filter((todo)=> todo.id !== id)
    return filteredTodo;
  })
  }
  return ( <div className={Style.homeDivContainer}>
  <h1>Todo-App</h1>
  <NewTodo onAccessData={handletodo}/>
  <Todos className={Style.a} todos={todos} onRemoveTodo={handleRemoveTodo} />
   </div>
  )  
}
export default ProjectTodo;