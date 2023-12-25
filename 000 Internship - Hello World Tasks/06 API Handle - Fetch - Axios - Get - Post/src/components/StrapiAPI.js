import axios from 'axios';
import React, { useEffect, useState } from 'react'

const StrapiAPI = () => {
    const [products, setProducts] = useState([])
    const [err, setErr] = useState(null);
    const STRAPI_API_URL = "http://localhost:1337/api" 
    const STRAPI_MEDIA_URL = "http://localhost:1337"
    const ACCESS_TOKEN="47e9095912b5457963916d3fc90ed6d2ed0552588e55faa73d0278479e018d8bed3e1869965610444d418b7d2dbdd4c08fc604327e359bdb8e9574581276a5220b9eecd38e70bddf4c2f5caf6f55f4a2d49ced66fc04dd1230d08ed20cec94021ed9d6e9902d553469c8ff2971d6abd7646229a6b7efe73eea27e106407406d0";

    const getProducts = async() => {
        try {
            let result = await axios.get(`${STRAPI_API_URL}/products?populate=*`, {
                    headers: {
                        'Authorization': `Bearer ${ACCESS_TOKEN}`
                    }
                    })
                    setProducts(result.data.data)
        } catch (error) {
            setErr(error.message);
    } }
useEffect(()=>{
    getProducts()
},[])
  return (
    <div className='container'>
        <h2>Fetch Store Products</h2>
        {err !== "" && <h2 className='text-danger'>{err}</h2>}

        <div className="row row-cols-1 row-cols-md-3 g-4">
        {products && products.map((p)=>(
            <div className="col-lg-3" key={p.id}>
                <div className="card h-100">
                    <img src={STRAPI_MEDIA_URL+p.attributes.image.data[0].attributes.url} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{p.attributes.title}</h5>
                    <button  className="btn btn-primary">{p.attributes.price}$</button>
                    </div>
                </div>
            </div>
            ))
        }
        </div>
    </div>
  )
}

export default StrapiAPI