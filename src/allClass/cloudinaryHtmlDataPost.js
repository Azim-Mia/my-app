import React from 'react';
const CloudinaryPost=()=>{
  return <div>
  <form action="http://localhost:4020/api/users/register" methot="post">
 name:<input type="text" name="name" />
 <div><input type="file" name="image" /></div>
 <div><button type="submit">Submit</button></div>
  </form>
  </div>
}
export default CloudinaryPost;