import React,{useState} from 'react';
const bookList=[
  {id:1, name:"azim", book:"Bangla"},
    {id:2, name:"azim1", book:"English"},
      {id:3, name:"azim2", book:"grammar"},
    ];
    const Modal=({textMode})=>{
      return <p>{textMode}</p>
    }
const UseReducer=()=>{
  const [books, setBooks]=useState(bookList);
 const [addBook, setAddBook]=useState("")
 const [a, setA]=useState("");
 const [textModeOpen, setTextmodeOpen]=useState(false)
 const [textMode, setTextmode]=useState("");
const handleSubmit=(e)=>{
   e.preventDefault();
  const newBooks={id: new Date().getTime().toString(), name: addBook}
   setBooks((previus)=>[...previus,newBooks ])
   
   setTextmodeOpen(true);
   setTextmode("added book");
 }
 const handleInput=(e)=>{
   e.preventDefault();
   setA(e.target.value)
 }
  return <div>
       <form onSubmit={handleSubmit} >
    <input type="text" onChange={(e)=>{setAddBook(e.target.value);}} />
    <button type="submit">add</button>
    </form>
{textModeOpen && <Modal textMode={textMode} />}
  {
    books.map((book)=>{
    const {id, name}=book;
    return <p key={id}>{name}</p>
    
    })
  }
   <input type="text" value={a} onChange={handleInput}/>
  <h1>{a}</h1>
    </div>
}
export default UseReducer;