const  makeRequest=async()=>{
      const res=await fetch("http://localhost:3001/read");
    const data=await res.json();
    return data;
    }
  export default makeRequest;