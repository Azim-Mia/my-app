/*fetch("http://localhost:4020/api/users/getAllUser")
.then((res)=>res.json())
.then((data)=>{
  const datas=data.payload.users;
const a=datas.map((x)=>x.name);
});*/
import React from 'react'
function Card(props){
  const {title, desc,imgSrc}=props;
  return <div className="card"> 
  <div className="cardBox"> <h1 className="cardheading">{title}</h1>
   <div>Bangladesh</div>
   <div>{imgSrc}</div>
   <a href="http://www.alibaba.com">Seen Full Image</a>
  <div>{desc}</div>
  </div>
  </div>
}
export default Card;