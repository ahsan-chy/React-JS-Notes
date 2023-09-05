import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'

const Products = () => {
    const [products, setProducts] = useState([])
    
  const dispatch = useDispatch();

    const fetchProducts = async() =>{
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        // console.log(data);
        setProducts(data);
    }
    const addProductToCart = (product) => {
        // console.log('product', product)
        dispatch(add(product))
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
                    <button className='btn' onClick={() => addProductToCart(product)}>Add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products