import React, {useState,useEffect} from 'react'
const lodingMessage=<h1>This page is loding..</h1>
const errorMessage=<h1>Not found fetch data</h1>
const UseEffectErrorHandle=()=>{
const [todos, setTodos]=useState(null)
const [isLodingPage, setLodingPage]=useState(true)
const [isError, setError]=useState(false)

useEffect(()=>{
 setTimeout(()=>{
   fetch("http://localhost:4020/api/users/getAllUser")
  .then((res)=>{
    if(!res.ok){
      throw Error('not found fetch data')
    }else{
      return res.json()
    }
  })
  .then((data)=>{
    setTodos(data)
    setLodingPage(false)
    setError(null);
  },[]).catch((error)=>{
    setError(error.message);
    setLodingPage(false)
  })
 },6000)
});
const Element=todos && 
todos.payload.users.map((todo)=>{
return (<div>
<p key={todo.id}>{todo.name}</p>
<p key={todo.id}>{todo.email}</p>
<img style={{height:"200px", width:"200px"}} src="./images/image.jpg" alt="photos"/>
</div>)
});
return (
<div>
<h1>useEffect part2 Video 41</h1>
<h1>Fetch Data mongodb</h1>
<span>.................</span>
{isLodingPage && lodingMessage}
{isError && errorMessage}
{Element}
</div>
)
};
export default UseEffectErrorHandle;
