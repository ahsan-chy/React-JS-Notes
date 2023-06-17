import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductCard from '../component/ProductCard';
import { AuthContext } from '../context/AuthProvider';
import { exportCategories, exportProducts } from '../services/services';
import { ProductContext } from '../context/ProductProvider';

const Home = () => {
  const storeProducts = exportProducts() 
  const {user} = useContext(AuthContext)
  const {name, price, addProduct, deleteProduct } = useContext(ProductContext)

  console.log(name, price)
  
  React.useEffect(()=>{
    console.log(user)

  },[user])

  // const categories = exportCategories();
  // console.log(categories);

  const [products, setProducts] =useState(null)

  useEffect(()=>{
    setProducts(storeProducts)
  },[]);

  if(!products)
    return (<div className="d-flex justify-content-center mt-5 pt-5">
      <button className="btn btn-success" type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Loading...
        </button>
      </div>
    )
  

  return (
    <div className='text-center my-5 py-5 text-success'>
        <h3>
           Welcome <span className='text-danger'>{!user ? "" : user.username} </span> To Cloth Store
        </h3>
        <div className="container">
        <div className="row  my-5">
          {products.map( prod =>
              <ProductCard prod ={prod} key={prod.id} />
              )}
          </div>
       </div>
    </div>
  )
}

export default Home


