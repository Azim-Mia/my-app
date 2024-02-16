import React, {useState} from 'react';
import faq from '/data/data/com.termux/files/home/my-app/src/allDataStore/faqsData.js';
import Component from './component.js'
function Faqs(){
  const [data]=useState(faq);
  return <div>
  <h1>FAQs</h1>
  {data.map((FAQs)=><Component key={FAQs.id} {...FAQs}/> )}
  </div>

}
export default Faqs;