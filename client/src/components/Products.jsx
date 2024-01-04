import React, { useEffect, useState } from "react";
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {fetchProducts,deleteProduct}  from "../store/productSlice";
import { useDispatch,useSelector } from "react-redux";



function Products() {
  const [products,setProducts]=useState([])
  // const products=useSelector(state=>state.products.products)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async() => {
    const response=await axios.get('http://localhost:5001/getProducts')
      //  dispatch(fetchProducts(response.data))
      setProducts(response.data)
       
  }

  const addProduct = () => {
    navigate('/addNewProduct')
  }

  const handleDelete = async (id) => {
    const response = await axios.delete('http://localhost:5001/deleteProduct/' + id)
    dispatch(deleteProduct({id}))
    fetchData()

  }

  const handleProductDetail=()=>{
    navigate('/productDetailPage')
  }

  const handleSearch=(e)=>{
   const key=e.target.value
   if(key){
    axios.get('http://localhost:5001/search/'+key).then((response)=>{
      if(response){
        setProducts(response.data)
      }
     }) 
   }else{
    fetchData()

   }
   
    

  }

  return (
    <div className="container my-5">
      <h1 style={{ fontFamily: 'monospace' }}>Products</h1>
      <form class="d-flex" role="search">
        <input onChange={(e)=>{handleSearch(e)}} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
      <div class="container mt-4">
        <button onClick={() => addProduct()} className="btn btn-success">Add Product</button>
        <div className="row my-3" >
          {
         products.length?products.map((items, index) => {
              return (
                <div class="col-md-3" key={index}>
                  <div className="card my-2" style={{width:'200px'}}>
                    <img onClick={(e)=>{handleProductDetail()}} src={'http://localhost:5001/images/' + items.image} class="card-img-top"  />
                    <div class="card-body">
                      <h5 class="card-title">{items.title}</h5>
                      <p class="card-text">${items.price}</p>
                      <Link onClick={(e) => handleDelete(items._id)} href="#" class="btn btn-sm btn-danger mx-2">Delete</Link>
                      <Link  to={`/update/${items._id}`} class="btn btn-sm btn-warning mx-2">Update</Link>

                    </div>
                  </div>

                </div>
              )
            })
         :<h1 className="my-5 mx-5" style={{ fontFamily: 'monospace' }}>No Products</h1> }
        </div>
      </div>
    </div>

  );
}

export default Products;
