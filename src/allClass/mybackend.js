import React, {useState, useEffect} from 'react'

const Myapp=()=>{
const [todos, setTodos]=useState(null)

useEffect(()=>{
 fetch("http://localhost:4020/api/users/getAllUser")
  .then((res)=>{
    return res.json()
  })
  .then((data)=>{
    setTodos(data)
  },[]);
});
return (
<div>
<h1>hello Backend</h1>
{todos && todos.payload.users.map((todo)=>{
return (
<div>
<p key={todo.id}>{todo.name}</p>
<p key={todo.id}>{todo.email}</p>
<img style={{height:"200px", width:"200px"}} src="./images/image.jpg" alt="photos"/>
</div>)
})}
</div>
)
};
export default Myapp;
