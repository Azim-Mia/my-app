import React from 'react'
import useFetch from './fetchData.js'
const CustomHook=()=>{
const {data, isLodingPage, isError}=useFetch("http://localhost:4020/api/users/getAllUser");
const lodingMessage=<h1>This page is loding..</h1>
const errorMessage=<h1>Not found fetch data</h1>
const Element=data && 
data.payload.users.map((todo)=>{
return (<div>
<p key={todo.id}>{todo.name}</p>
<p key={todo.id}>{todo.email}</p>
<img style={{height:"200px", width:"200px"}} src="./images/image.jpg" alt="photos"/>
</div>)
});
return (
<div>
<h1>CustomHook Fetch Data Video 42</h1>
<h1>Fetch Data mongodb</h1>
<span>.................</span>
{isLodingPage && lodingMessage}
{isError && errorMessage}
{Element}
</div>
)
};
export default CustomHook;
