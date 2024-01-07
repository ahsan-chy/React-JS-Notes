<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({prod}) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 my-2">
        <div className="card p-3">
            <div style={{width:'100%', height:'210px'}}>
            <img src={prod.image} className="card-img-top" alt="..." style={{width:'auto' , height:'60%'}}/>
            </div>
            
            <div className="card-body">
            <h6 className="card-title">{prod.title}</h6>
            <button className="btn btn-outline-success">
                <Link to={`/Checkout/${prod.id}`} className='text-danger d-block'>{prod.price}</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

=======
import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({prod}) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 my-2">
        <div className="card p-3">
            <div style={{width:'100%', height:'210px'}}>
            <img src={prod.image} className="card-img-top" alt="..." style={{width:'auto' , height:'60%'}}/>
            </div>
            
            <div className="card-body">
            <h6 className="card-title">{prod.title}</h6>
            <button className="btn btn-outline-success">
                <Link to={`/Checkout/${prod.id}`} className='text-danger d-block'>{prod.price}</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

>>>>>>> 78ef44e09afa2a867a52a71d0ba124618848776f
export default ProductCard