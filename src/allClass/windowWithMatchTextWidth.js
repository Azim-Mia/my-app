import React, {useRef, useEffect} from 'react';
const WindowMatchTextWidth=()=>{
  const containerRef= useRef(null);
  const textRef= useRef(null);
  const resizeText=()=>{
    const container= containerRef.current;
    const text=textRef.current;
    const containerWith=container.offsetWidth;
    let min=1;
  let max=2000;
    while(min <= max){
const mid =Math.floor((min+max)/2)
text.style.fontSize=mid +"px";
if(text.offsetWidth <= containerWith){
  min=mid+1;
}else{
  max=mid-1;
}
    }
    text.style.fontSize= max +"px";
  }
useEffect(()=>{
  resizeText();
  window.addEventListener('resize',resizeText)
  return ()=>{
    window.removeEventListener('resize', resizeText);
  }
},[]);
  return <>
  <div ref={containerRef}><span ref={textRef}>Wallton Company</span></div>
  <button>alartOption </button>
  </>
}
export default WindowMatchTextWidth;