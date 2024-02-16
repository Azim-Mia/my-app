import makeRequest from './getApiData.js';
import {useQuery} from 'react-query';
const Quote=({quote})=>{
  const {data }=useQuery("quote", ()=>makeRequest())
  return ( <div>
  {
    data?.payload.findAll.map((info)=><img src ={info.image} alt="photos" />)
  }
  </div>)
}
export default Quote