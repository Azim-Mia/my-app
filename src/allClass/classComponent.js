import {Component} from 'react';
export class MyClassComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      data:null,
    };
  }
  componentDidMount(){
    setTimeout(()=>{
    this.setState({data:"componentDidMount"})
    },1000)
    };
  componentDidUpdate(prevProps,prevState){
      if(prevProps.data !== this.state.data){
     console.log("data is update")
    }
  }
  componentWillUnmount(){
    alert("componentWillUnmount")
    //console("component is unmount")
  }
  render(){
    return <div><p>{this.state.data}</p></div>
  }
}
