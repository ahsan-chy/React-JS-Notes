import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import ProductCard from '../component/ProductCard';
import { getProductById } from '../services/services';


const Checkout = () => {

  const {id} = useParams();

  let myproduct = getProductById(id)

  return (
    <div className='text-center my-5 py-5'>
        <h3>
            Products Checkout Page
        </h3>
          <div className="col-lg-3 col-md-3 col-sm-3 my-2"  key={myproduct.id}>
          <div className="card p-3">
              <img src={myproduct.image} className="card-img-top w-75" alt="..."/>
              <div className="card-body">
                <h6 className="card-title">{myproduct.title}</h6>
                <button className="btn btn-outline-success">
                  <Link to={`/Checkout/${myproduct.id}`} className='text-danger d-block'>{myproduct.price}</Link>
                </button>
              </div>
            </div>
        </div>      
    </div>
  )
}

export default Checkout