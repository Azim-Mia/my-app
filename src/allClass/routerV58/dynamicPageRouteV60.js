import React from 'react';
import { Link } from "react-router-dom";
import './navigation.css'
import Info from '/data/data/com.termux/files/home/my-app/src/allDataStore/dynamicData.js'
const DynamicData=()=>{
   const distrucString=(str,num)=>{
     if(str.length>num){
       return str.slice(0,num) + "...";
     }else{
       return str;
     }
   }
   return <div>
   {Info.map((blog)=>{
   const {id,title,body}=blog;
  // amney beboha r korci
   return (<article key={id}>
  <h1>{title}</h1>
  <p>{distrucString(body,10)}</p>
<Link to={title}><p>learn more</p></Link>
   </article>
   );
   })}
   </div>
}
export default DynamicData;