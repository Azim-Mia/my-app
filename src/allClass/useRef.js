import React, {Component,createRef} from 'react';
 class UseRef extends Component{
   constructor(props){
     super(props);
     // useRef bebohar link 
     this.name=createRef();
     this.state={
     }
   }
   handleSubmit=(e)=>{
      e.preventDefault();
      //sorasori select
      alert(this.name.current);
    }
  render(){
    return (
      <div>
   <from onClick={this.handleSubmit} >
   <input type="text" ref={this.name} />
   <button type="submit">submit</button>
   </from>
   <hr/>
   </div>
    )
  }
}
export default UseRef