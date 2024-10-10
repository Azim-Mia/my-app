import {useState,useEffect} from 'react'
const useFetch=(url,options)=>{
  const [data, setData]=useState(null)
const [isLodingPage, setLodingPage]=useState(true)
const [isError, setError]=useState(false)
useEffect(()=>{
   fetch(url,options)
  .then((res)=>{
    if(!res.ok){
    throw Error("not found fetch data");
    }else{
      return res.json()
    }
  })
  .then((datas)=>{
    setData(datas)
    setLodingPage(false)
    setError(null);
  }).catch((error)=>{
    setError(error.message);
    setLodingPage(false)
  })
},[url,options]);
  return {data, isLodingPage, isError}
}
export default useFetch;