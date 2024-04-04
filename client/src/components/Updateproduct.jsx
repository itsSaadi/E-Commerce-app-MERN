import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { updateProduct } from '../store/productSlice'
import {useDispatch} from 'react-redux'

export default function Updateproduct() {
  const nvigate = useNavigate()
  const dispacth = useDispatch()
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [file, setFile] = useState('')
  const { id } = useParams()


  useEffect(() => {

    fetchData()
  }, [])

  const fetchData = async () => {

    const responnse = await axios.get('http://localhost:5001/getProducts')
    const product = responnse.data.find(u => u._id === id)
    setTitle(product.title)
    setPrice(product.price)

  }

  const handleUpdate = async (e) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('title', title)
    formData.append('price', price)
    e.preventDefault()
    const response = await axios.put('http://localhost:5001/update/' + id, formData)
    dispacth(updateProduct({id,title,price}))
    nvigate('/products')
  }

  return (
    <div className="container my-5">
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <h1 style={{ fontFamily: 'monospace' }}>Update</h1>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            value={title}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            onChange={(e) => setTitle(e.target.value)}
          />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            value={price}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            required
            onChange={(e) => setPrice(e.target.value)}
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
            onChange={(e) => setFile(e.target.files[0])}
            
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  )
}
