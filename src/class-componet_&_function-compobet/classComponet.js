import React, {Component} from 'react';
 class CardClassComponent extends Component{
  render(){
    return (
      <div>
   <h1>{this.props.name}</h1>
   <hr/>
   </div>
    )
  }
}
export default CardClassComponent