import React,{useState,useReducer} from 'react';
const bookList=[
  {id:1, name:"azim", book:"Bangla"},
    ];
    const Model=({message})=>{
      return <p>{message}</p>
    }
    const reducer=(state, action)=>{
      if(action.type==="ADD"){
        const allBook=[...state.books, action.payload]
        return {
         ...state,
         books:allBook,
         isModalOpen:true,
         modalText:"book is added"
        }
      }
      if(action.type==="REMOVE"){
        
      }
     return state; 
    }
    const UseReducerAll=()=>{
    const [bookState,dispatch]=useReducer(reducer, {
      books:bookList,
      isModalOpen:false,
      modalText:"",
    })
    const [bookName,setBookAdd]=useState("");
    const handleSubmit=(e)=>{
       e.preventDefault();
       const newBook={id:new Date().getTime().toString(), name:bookName }
       dispatch({type:"ADD", payload:newBook})
     }
      return (
       <div>
       <form onSubmit={handleSubmit}>
       <div><input type="text" value={bookName} onChange={(e)=>setBookAdd(e.target.value)} /></div>
        <div><button type="submit">submit</button></div>
       </form>
       {bookState.isModalOpen && <Model message={bookState.modalText} />}
       {
      bookState.books.map((book)=>{
      return<h1>{book.name}</h1>})}
       </div> 
        )
    }
export default UseReducerAll;