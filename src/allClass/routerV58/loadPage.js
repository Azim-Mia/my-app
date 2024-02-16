import React from 'react';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home.js'
import Blog from './blog.js'
import Profile from './profile.js'
import NavRouterVTwo from './navRouterV59.js';
import DynamicData from  './dynamicPageRouteV60.js';
function LoadPage(){
  return (<div>
  <BrowserRouter>
  <NavRouterVTwo />
<Routes>
<Route path="/home" element={<Home />} />
<Route path="/profile" element={<Profile />} />
<Route path="/blogs" element={<DynamicData />} />
<Route path="/blogs/:title" element={<Blog />} />
</Routes>
</BrowserRouter>
</div>
);
}
export default LoadPage;