import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {AddToCart} from '../../Store/CartSlice'
const backendUrl = import.meta.env.VITE_BACKEND_URL;


export default function Tshirt() {

  const dispatch = useDispatch();

  function handleClick(Product) {
    dispatch(AddToCart(Product))
  }
  const baseurl = import.meta.env.VITE_BASE_URL
  const [apidata, setapiData] = useState([])

  const { category, Products } = useParams()
  console.log(category)
  useEffect(() => {
    fetch(`${backendUrl}/${category}/${Products}`)
      .then(data => data.json())
      .then(response => setapiData(response))
  }, [category, Products])
  console.log(apidata)
  return (
    <div className="container">
      <h1 className="text-center mb-4">{category}</h1>
      <div className="row">
        {apidata.map((values, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 text-center">
              <img
                src={`${baseurl}/uploads/${values.image}`}
                alt={values.title}
                className="card-img-top "
                style={{ height: '300px' }}
              />
              <div className="card-body">
                <p className="card-text">Category: {values.Sub_Category}</p>
                <h5 className="card-title">{values.title}</h5>
                <p className="card-text">{values.description}</p>
                <p className="card-text fw-bold">Price: ${values.price}</p>
                <button className='btn btn-primary' onClick={()=>{handleClick(values)}}>Add To Cart</button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>

  )
}
