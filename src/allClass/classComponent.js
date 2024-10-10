import {Component} from 'react';
export class MyClassComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      data:"class component stuctute one",
      'title':'',
      address:'',
      date:'11.10.2024',
    };
  }
 componentDidMount(){
    this.setState({data:"componentDidMount"})
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
  handleSubmit =(e)=>{
    e.preventDefault();
    alert(this.state.title);
  }
  onchangeHandle =(e)=>{
  this.setState({title:e.target.value})
  }
  render(){
  const {title} = this.state;
    return <div>
    <p>{this.state.data}</p>
    <form onSubmit= {this.handleSubmit}>
    <input type="text" name="title" value ={null} onChange={this.onchangeHandle} />
    </form>
    </div>
  }
}
