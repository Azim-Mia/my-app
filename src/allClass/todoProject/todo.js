import React from 'react'
import Style from './css/todo.module.css'
 function Todo(props){
 const {title,desc}=props.todo
 const {id}=props
 function handleButton(id){
   props.onRemoveTodo(id);
 }
  return (
    <article className={Style.todoContainer}>
    <div className={Style.desc}>
     <h3 className={Style.textTitle}>{title}</h3>
      <p className={Style.textDesc}>{desc}</p>
    </div>
    <button onClick={()=>{handleButton(id)}} className={Style.button}><i className="fa fa-trash fa-2x"></i></button>
    </article>
    )
}
export default Todo;