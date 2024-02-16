import React, {Component} from 'react';
 function Home(){
  return (
    <div><h1>RENDARING HOME_PAGE</h1><hr/></div>
    )
}
function Login(){
  return (
    <div><h1>Login page</h1></div>
    )
}
class ROUTING extends Component{
  constructor (props){
    super(props)
    this.state={
      count:true
    }
  }
  render(){
  if(this.state.count){
    return <Home />
    }else{
     return <Login /> 
    }
  }
}
  export default ROUTING;