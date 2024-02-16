import React, {Component} from 'react'
class Eventhandle extends Component{
  constructor (props){
    super(props)
    this.state={
      changeValue: ''
    }
  }
  //function listien data 
  onChangeValue=(e)=>{
this.setState({
  changeValue:e.target.value
},()=>{console.log(this.state.changeValue)})
  }
  clearData=()=>{
 const p = document.querySelector("#p");
 const p2 = document.querySelector("#p2");
 //p button p2 input data clear 
 p.textContent="";
 p2.value="";
  }
  render(){
    return (
    <div><h1>EVENT_HANDLE</h1> 
    <input id="p2" type="text" maxLength="20" onChange={this.onChangeValue} name=""/>
       <button onClick={this.clearData}>click here</button>
    <h1 id="p">{this.state.changeValue}</h1><hr/>
    </div>
    )
  }
}
export default Eventhandle;