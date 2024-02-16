import React, {useState,useEffect} from 'react';
const DynamicStyle=()=>{
  const [name, setName]=useState("")
  const [valid, setValid]=useState(true)
  const error=true;
  const handleChange=(e)=>{
    setName(e.target.value)
  }
  useEffect(()=>{
   if(name.length<2){
     setValid(false)
    }else{
    setValid(true)
    }  
  },[name])
  return <div>
  <input className={`${valid ? "indexDynamicStyleFile" : "a"}`} type="text" name="" placeholder="dynamic colour" value={name} onChange={handleChange} />
  <h1  style={{color: error ? "yellow" : "blue",
    background: error ? "coral" : "green",
  }}>DynamicStyle</h1>
  </div>
}
export default DynamicStyle ;