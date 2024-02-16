import React, {useState} from 'react'
import "/data/data/com.termux/files/home/my-app/src/cssFolder/form.css"
//const [password,setPassword]=useState("")
//const [email,setEmail]=useState("")
function StateObject(){
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
  const nameHandle=(e)=>{
    setName(e.target.value);
  }
  const emailHandle=(e)=>{
    setEmail(e.target.value);
  }
  const passwordHandle=(e)=>{
    setPassword(e.target.value);
  }
  const submit=(e)=>{
    e.preventDefault();
 }
  return <div><hr/>
  <h1>{name}</h1><br/>
  <h2>{email}</h2><br/>
   <h3>{password}</h3><br/>
  <form>
  <div> <lable className="name">Name :</lable><input className="name" type="text" onChange={nameHandle} name="name" value={name} placeholder="Enter Your name"   /></div>
  <div><lable className="name">Email: </lable><input className="name" type="Email" name="email" onChange={emailHandle} placeholder="Enter Your Email" value={email}/></div>
  <div><lable className="name">Password: </lable><input className="name" type="password" name="password" onChange={passwordHandle}   placeholder="Enter Your password" value={password}/></div>
  <button onSubmit={submit} type="submit">submit
  </button>
  </form><span>.............................</span>
  </div>
}
export default StateObject;