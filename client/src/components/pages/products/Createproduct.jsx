import React, { useState } from "react";
import axios from 'axios'
import {addProduct}  from "../../../store/productSlice";
import {useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'

export default function Createproduct() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [title,setTitle]=useState('')
  const [price,setPrice]=useState('')
  const [file,setFile]=useState('')

  const postProduct=async(e)=>{
   e.preventDefault()
const formData=new FormData()
formData.append('file',file)   
formData.append('title',title)   
formData.append('price',price)   
  const response=await  axios.post("http://localhost:5001/upload",  formData)
  dispatch(addProduct(response.data));
  navigate('/products')
     
    
  }
  return (
    <>
    <div className="container my-5">
    <form onSubmit={postProduct}>
        <div className="mb-3">
          <h1>Enter Product Details</h1>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required

            onChange={(e)=>setTitle(e.target.value)}
          />
         
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            required
            onChange={(e)=>setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Image
          </label>
          <input
            type="file"
            name="file"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>setFile(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
      
    </>
  );
}
