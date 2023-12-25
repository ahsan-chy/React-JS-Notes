import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosFetch = () => {
    const [products, setProducts] = useState([])
    const [isError, setIsError] = useState("")

    //--- Method 1 ---//
    let getProducts = async() => {
        try{
            let result = await axios.get('https://fakestoreapi.com/products')
            setProducts(result.data)
        }
        catch(error){
            setIsError(error.message)
            console.log("error")
        }
    }

useEffect(()=>{
    getProducts()

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

export default AxiosFetch