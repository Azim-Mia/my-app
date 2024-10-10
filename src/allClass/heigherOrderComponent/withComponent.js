import React from 'react';
const withComponent =(OrginalComponent)=>{
  class NewComponent extends React.Component{
   state={
  count:0,
};
incriment =()=>{
  this.setState((priviousState)=>({count:priviousState.count + 1}))
  
}
decrincriment =()=>{
  this.setState((priviousState)=>({count:priviousState.count - 1}))
}
render(){
const {count} =this.state;
return <OrginalComponent count={count} incriment={this.incriment} decrincriment={this.decrincriment} />
}
}
return NewComponent;
}
export default withComponent;