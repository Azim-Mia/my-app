import React from 'react';
import products from '/data/data/com.termux/files/home/my-app/src/allDataStore/productData.js';
function Product(){
  return <div>
   <h1>product</h1>
  {
  products.map((data)=>{
  const {title,price,description,category,image}=data;
    return (
  <section>  
    <article>
    <h1> {title}</h1>
    <img src={image} alt="photos" />
<div><a href={image}>Seen full photos</a></div>
    <p>{price}</p>
     <p>{description}</p>
     <p>{category}</p>
    </article>
  </section>  
    )})
  }
  </div>
}
export default React.memo(Product);