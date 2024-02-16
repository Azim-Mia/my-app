import React from 'react';
import Reactquery from '/data/data/com.termux/files/home/my-app/src/allClass/reactquery/reactquery.js';
import Allrouting from '/data/data/com.termux/files/home/my-app/src/allClass/routerV58/routingAll.js';
import Usereducercontext from '../src/allClass/UseContextReducer/index.js';
import Usecontextproject from '../src/allClass/useContextProject/useContext.js';
import Proptrilling from  '../src/allClass/propTriling/component1.js';
import UseReducerAll from  '../src/allClass/useReducer/useReducerHookAll.js';
import UseReducer from  '../src/allClass/useReducer/useReducerHook.js';
import UseRef from  '../src/allClass/useRef.js';
import CloudinaryPost from  '../src/allClass/cloudinaryHtmlDataPost.js';
import DynamicStyle from '../src/allClass/dynamicStyle.js';
import CountryApp from '../src/allClass/countryApp/counties.js';
import Product from '../src/allClass/product.js';
import Toastify from '../src/allClass/toeastify.js';
import Faqs from '../src/allClass/FAQs/faqs.js';
import Toggle from '../src/allClass/toggle.js';
import LoadPageRouterOne from '../src/allClass/routerV58/loadPage.js';
import Header from '../src/allClass/header.js';
import CustomHook from '../src/allClass/customHook/customHook.js';
import UseEffectErrorHandle from '../src/allClass/useEffectErrorHandleV41.js';
import UseEffect from '../src/allClass/useEffect.js';
import Myapp from '../src/allClass/mybackend.js';
import FormikVideo from '../src/allClass/formik/signup.js'
import ProjectTodo from '../src/allClass/todoProject/home.js'
import Parentchilddata from '../src/allClass/parentChildDataV30.js'
import Stateobject from '../src/allClass/stateObjectV29.js'
import Eventhandleform from '../src/allClass/evenHandleFromV28.js'
import Eventbubbling from '../src/allClass/eventBubblingV26.js'
import PreviousState from '../src/allClass/previousStateV25.js'
import Usestatehook from '../src/allClass/useStateHookV24.js'
import Bindingfinction from '../src/allClass/bindV23.js'
import EventHandle from '../src/allClass/eventHandleV22.js'
import Randaring from '../src/allClass/randaringV21.js'
import SetState from '../src/allClass/setStateV20/state.js'
import FunctionComponet from '../src/class-componet_&_function-compobet/functionComponet.js'
import ClassComponet from '../src/class-componet_&_function-compobet/classComponet.js'

import Card from '../src/componets/Card.js'
import Todo from '../src/allClass/todoV32/home.js'
function App(){
  const handleChildData=(childData)=>{
  console.log(childData);
  }
  return (
  <div>
  <div><Reactquery /></div>
      <div><Allrouting /></div>
    <div><Usereducercontext /></div>
  <div><Usecontextproject /></div>
<div><Proptrilling /></div>
  <div><UseReducerAll /></div>
  <div><UseReducer /></div>
  <div><UseRef /></div>
  <div><CloudinaryPost /></div>
     <div><DynamicStyle /></div>
   <div><CountryApp /></div>
     <div><Product /></div>
      <div><Toastify /></div>
    <div><Faqs /></div>
     <div><Toggle /></div>
   <div><LoadPageRouterOne /></div>
   <div><Header /></div>
        <div><CustomHook /></div>
     <div><UseEffectErrorHandle /></div>
   <div><UseEffect /></div>
   <div><Myapp /></div>
    <div><FormikVideo /></div>
  <div><ProjectTodo /></div>
  <div><Todo /></div>
  <div><Parentchilddata name="Child accept" onChildData={handleChildData}/></div>
  <div><Stateobject /></div>
   <div><Eventhandleform /></div>
 <div><Eventbubbling /></div>
   <div><PreviousState /></div>
    <div><Usestatehook /></div>
  <div><Bindingfinction /></div> 
   <div><EventHandle /></div>
    <div><Randaring /></div>
  <div><SetState /></div>
    <div><FunctionComponet /></div>
 <div><ClassComponet name="classComponent" /></div>
 <div><Card title="azim" desc="very nice project" imgSrc=""  /></div>
  </div>
  )
}
export default App;