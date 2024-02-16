import React, {Component} from 'react';
class STATE extends Component{
  constructor (props){
    super(props)
    this.state={
      count:0
    }
  }
    handleIncriment=()=>{
    this.setState({
      count:this.state.count +1
    })
  }
  handleDecrement=()=>{
    this.setState({
      count:this.state.count -1
    })
  }
  render() {
    const {count}=this.state;
    return (
      <div>
      <h1>setStateCount : {count}</h1>
      <button className="button" onClick={this.handleDecrement} disabled={count===0 ? true:false}>-</button>
      <button className="button" onClick={this.handleIncriment}>+</button>
      <hr/>
        </div>
        )
  }
}
  export default STATE;