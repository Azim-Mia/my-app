import React,{useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route,Link, NavLink, useNavigate,useParams} from "react-router-dom";
const data=[
  {id:101, title:"html", body:"dgdhhdhsjs shsusisjdh sjsushssg sjsusueuei susisueue susueieye sieushehge siwieuege sieueiege eiwihejee sieiege s iwyeveve eieuegbeiee sjeugdgbd dieuejegee dieiehe ejehdbebehssjsisjs sisishshsbsbe sisisbdvdhe sisjvdidvshd sjsvsvisvs sisvsbushs"},
    {id:101, title:"css", body:"dgdhhdhsjs shsusisjdh sjsushssg sjsusueuei susisueue susueieye sieushehge siwieuege sieueiege eiwihejee sieiege s iwyeveve eieuegbeiee sjeugdgbd dieuejegee dieiehe ejehdbebehssjsisjs sisishshsbsbe sisisbdvdhe sisjvdidvshd sjsvsvisvs sisvsbushs"}
  ]
  const Home=()=>{
    return <div>Home..page
    <Link to="http://localhost:3000">Learnmore</Link>
    </div>
  }
  const Display=()=>{
    const [display, setBlogData]=useState("");
  const {title}=useParams();
  useEffect(()=>{
    const datas=data.filter((data)=>data.title === title);
 setBlogData(datas[0].body)
  },[title]);
  return <h1>{display}</h1>
  }
  const Contruct=()=>{
    const navigate= useNavigate();
    return <div>
    Contruct page<br/>
    <button onClick={()=>{navigate("/home")}}>go to home</button>
    </div>
  }
  //creage link page..
  const NavAddress=()=>{
    return <nav>
    <NavLink to="/home">Home</NavLink>
   <NavLink to="/contruct">contruct</NavLink>
    </nav>
  }
  //create routing page
  const Routing=()=>{
    return <div>
        <BrowserRouter>
    <NavAddress />    
    <Routes>
    <Route path="/home" element={<Home />} />
   <Route path="/contruct" element={<Contruct />} />
    <Route path="/:title" element={<Display />} />
    </Routes>
    </BrowserRouter>
    </div>
  }
const Allrouting=()=>{
  return <div>
  <Routing />
   <section>
    {data.map((user)=>{
    const {id,title, body}=user;
  const distrucString=(str,num)=>{
     if(str.length>num){
       return str.slice(0,num) + "...";
     }else{
       return str;
     }
   }
       return (<article key={id}>
      <h1>{id}</h1>
   <h1>{title}</h1>
     <h1>{distrucString(body,20)}</h1>
     <a href={title}>learn more...</a>
</article>);
    })}
    </section>
    </div>
}
export default Allrouting;