import {useState,useEffect} from 'react'
const useFetch=(url)=>{
  const [data, setData]=useState(null)
const [isLodingPage, setLodingPage]=useState(true)
const [isError, setError]=useState(false)

useEffect(()=>{
   fetch(url)
  .then((res)=>{
    if(!res.ok){
      throw Error('not found fetch data')
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
},[url]);
  return {data, isLodingPage, isError}
}
export default useFetch;