import React from 'react';
class Emoji extends React.Component {
 addEmoji =(text, emoji)=>`${text} ${emoji} ${text}`;
render (previus){
let text ="this emoji";
if(previus) text= previus;
 return <div>{text}</div> 
}
}
export default Emoji;
