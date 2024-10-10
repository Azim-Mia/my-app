import React from 'react'
import useFetch from './fetchData.js'
const CustomHook=()=>{
const options = {
method: 'GET',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(),
};
const {data, isLodingPage, isError}=useFetch("http://localhost:3001/read",options);
const lodingMessage=<h1>This page is loding..</h1>
const errorMessage=<h1>Not found fetch data</h1>
const Element=data && 
data.payload.findAll.map((todo)=>{
return (<div>
<p key={todo._id}>{todo.name}</p>
<p key={todo._id}>{todo.email}</p>
<img src={todo.image.url} alt="photos" />
</div>)
});
return (
<div>
<h1>Custom Hook</h1>
{isLodingPage && lodingMessage}
{isError && errorMessage}
{Element}
</div>
)
};
export default CustomHook;
