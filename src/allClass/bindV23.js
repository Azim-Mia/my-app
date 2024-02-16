import React,{Component} from 'react'
class Binding extends Component{
  constructor (props){
    super(props)
    this.state={
      count:0
    }
    //bind handle use
    this.bindHandle=this.bindHandle.bind(this)
  }
   bindHandle(){
  this.setState({
    count:this.state.count+1
  })
  }
  render(){
  return (
    <div> 
    <h1> bindHandle.bind(this):count:{this.state.count}</h1>
    <button onClick={this.bindHandle}>incriment</button><hr/></div>
    )
  }
}
export default Binding;