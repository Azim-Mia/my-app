import React from 'react';
 import {useFormik} from 'formik';
import * as yup from 'yup';

const FormikVideo=()=>{
  const formik=useFormik({
  initialValues:{
    name:'',
    email:'',
    password:''
  }, 
  validationSchema:yup.object({
   name:yup.string().min(2,"min length Two charecter").required(),
   email:yup.string().email("Inter your email").required(),
   password:yup.string().min(6,"must be 6 character").required()
  }),
  onSubmit:(values, {resetForm})=>{
    alert("success")
    resetForm({values:""})
  },
  });
  const nameErrors=formik.touched.name && formik.errors.name && (<span style={{color:"blue"}}>{formik.errors.name}</span>)
  const emailErrors=formik.touched.email && formik.errors.email && (<span style={{color:"blue"}}>{formik.errors.email}</span>)
  const passwordErrors=formik.touched.password && formik.errors.password && (<span style={{color:"blue"}}>{formik.errors.password}</span>)
  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
    <div>
    <lable forHtml="name">Name: </lable>
    <input type="text" id="name" name="name" value={formik.values.name} onChange={formik.handleChange}/><br/>
    {nameErrors}
    </div>
     <div>
    <lable forHtml="email">Email: </lable>
    <input type="text" id="email" name="email" value={formik.values.email} onChange={formik.handleChange}/><br/>
       {emailErrors}
    </div>
     <div>
    <lable forHtml="password">password: </lable>
    <input type="password" id="password" name="password" value={formik.values.password} onChange={formik.handleChange}/><br/>
        {passwordErrors}
    </div>
    <button>signup</button>
    </form>
    </div>
    )
}
export default FormikVideo;