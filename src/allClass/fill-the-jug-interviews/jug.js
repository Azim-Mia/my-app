import './index.css';
const Jug =({fillData})=>{
  return(<>
  <div class="container_jug">
<div class="container_water" style={{height:`${fillData}%`}}>
<span>{Math.round(fillData)}%</span>
</div>
</div>
  </>)
};
export default Jug;