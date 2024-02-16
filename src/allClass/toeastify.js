import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
function Toastify(){
  function handleButton(){
    toast("new User added")
  }
  return <div>
  <h1>hello toast</h1>
  <button onClick={handleButton}>add New User</button>
  <ToastContainer />
  </div>
}
export default Toastify;