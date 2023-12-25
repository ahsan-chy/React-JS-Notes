import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosFetch2 = () => {
    const [products, setProducts] = useState([])
    const [isError, setIsError] = useState("")

    const API = "https://fakestoreapi.com"
    const PRO ="products"
    const USERS = "users"
    //--- Method 2 ---//
    let getProducts2 = async(url) => {
        try{
            let result = await axios.get(url)
            setProducts(result.data)
        }
        catch(error){
            setIsError(error.message)
            console.log("error")
        }
    }
    
useEffect(()=>{
    // getProducts()

    getProducts2(`${API}/${PRO}`)
},[])


return (
    <div className='container'>
        <h2>Fetch Store Products</h2>
        
        {isError !== "" && <h2 className='text-danger'>{isError}</h2>}

        <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((p)=>(
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

export default AxiosFetch2