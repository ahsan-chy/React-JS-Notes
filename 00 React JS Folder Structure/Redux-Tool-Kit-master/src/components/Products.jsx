import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Products = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async() =>{
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        console.log(data);
        setProducts(data);
    }
useEffect(()=>{
    fetchProducts()
},[])
  return (
    <div className='productsWrapper'>
        {
            products.map(product=>(
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <p>{product.price}</p>
                    <button className='btn'>Add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products