import React, { useEffect, useState } from 'react'

const FetchStore = () => {
    const [products, setProducts] = useState([])

    // fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=>setProducts(json))

    async function allProducts() 
    {
      try{
        let response = await fetch(`https://fakestoreapi.com/products`);
        let data = await response.json()
        setProducts(data)
        return data;
      }
      catch(error)
      {
        console.log(error.message)
      }
    }
useEffect(()=>{
    allProducts()
},[])
  return (
    <div className='container'>
        <h2>Fetch Store Products</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {
            products.map((p)=>(
                <div className="col-lg-3" key={p.id}>
                    <div className="card h-100">
                        <img src={p.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">{p.title}</h5>
                        <button  className="btn btn-primary">{p.price}</button>
                        </div>
                    </div>
                    </div>
            ))
        }
        
        
      </div>

    </div>
  )
}

export default FetchStore