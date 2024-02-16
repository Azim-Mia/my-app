import React from 'react'
import Todo from './todo.js'
import Style from './css/todos.module.css'
 function Todos(props){
  return (
    <div className={Style.todosContainer}>
    {props.todos.map((todo)=><section>
  <Todo todo={todo.todo} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo}/>
    </section>)}
    </div>
    )
}
export default Todos;