import React from "react";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Quote from './quote.js';
const Reactquery=()=>{
  const client =new QueryClient()
  return <div>
  <h1>npm i react-query class react-query</h1>
 <QueryClientProvider client={client}>
   <Quote />
 </QueryClientProvider>
  </div>
}
export default Reactquery;