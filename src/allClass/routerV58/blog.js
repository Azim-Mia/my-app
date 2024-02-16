import React, { useState, useEffect} from 'react';
import  Info  from '/data/data/com.termux/files/home/my-app/src/allDataStore/dynamicData.js'
import { useParams } from "react-router-dom";
const Blog=()=>{
  const {title}=useParams();
  const [blogData, setBlogData]=useState("");
  
  useEffect(()=>{
    const datas=Info.filter((data)=>data.title === title);
 setBlogData(datas[0].body)
  },[title]);
  return (<div>
  <h1>{blogData} </h1>
  </div>
)
}
export default Blog;