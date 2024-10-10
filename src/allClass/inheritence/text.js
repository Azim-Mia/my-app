import Emoji from './Emoji';
class Text extends Emoji {
// eslint-disable-next-line
 constructor(props){
  super(props);
}
  render(){
  const textDecorate = this.addEmoji("Inheritance", "love");
    return super.render(textDecorate);
  }
}
export default Text;