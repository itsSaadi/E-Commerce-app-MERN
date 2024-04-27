import React, { useEffect,useState  } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

export default function ProductDetail() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [file, setFile] = useState('')


  const data = useSelector(state => state.products.products)
  const { id } = useParams()
  const product = data.find(u => u._id === id)

  useEffect(() => {
    console.warn(data)
    console.warn(product)
    setTitle(product.title)
    setPrice(product.price)
    setFile(product.image)
  }, [])
  return (
    <>
      <div className="container my-5">
        <div class="card" style={{ width: '18rem' }}>
          <img src={'http://localhost:5001/images/'+file} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{price}</p>
            <Link to="/cart" class="btn btn-primary">Add to cart</Link>
            <Link to="/cart" class="btn btn-success mx-3">Checkout</Link>
          </div>
        </div>
      </div>
    </>
  )
}
