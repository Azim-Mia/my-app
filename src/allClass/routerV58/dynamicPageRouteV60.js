import React from 'react';
import { Link } from "react-router-dom";
import './navigation.css'
import Info from '/data/data/com.termux/files/home/my-app/src/allDataStore/dynamicData.js'
const DynamicData=()=>{
return <div>
<h1>DynamicRouting</h1>
<section>
   {Info.map((blog)=>{
   const {id,title,body}=blog;
   const distrucString=(str,num)=>{
     if(str.length>num){
       return str.slice(0,60) + "...";
     }else{
       return str;
     }
   }
  // amney beboha r korci
   return (<article key={id}>
  <h1>{title}</h1>
  <p>{distrucString(body,100)}</p>
<Link to={title}><p>learn more</p></Link>
   </article>
   );
   })}
   </section>
    </div>
}
export default DynamicData;