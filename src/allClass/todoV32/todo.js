import React from 'react';
const style={
  textAlign:"center"
}
function Todo(props){
  return (
  <div style={style}>
  <h1> {props.todo}</h1>
    </div>
    )
}
export default Todo;