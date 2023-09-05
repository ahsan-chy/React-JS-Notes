<<<<<<< HEAD
import React, {useState, useEffect, useContext} from 'react';
import { ProductContext } from '../context/ProductProvider';

const Product = () => {
    
    const {addProduct, deleteProduct } = useContext(ProductContext)
    let [name, setName] = useState('');
    let [price, setPrice] = useState('');


    const handleName = (e) =>{
        setName(e.target.value)
    }
    const handlePrice = (e) =>{
        setPrice(e.target.value)
    }
    const submit = async(event) => {
        event.preventDefault()
        addProduct(name, price);
        console.log("Name: ",name, " Price: ", price)
        alert("Check price of product in console.log")
    }
    
  return (
    <div className='container w-50 my-5 '>
      <form onSubmit={submit}>
        <h2>Set Product Price</h2>
            <div className="mb-3">
                <label htmlFor="exampleInputName1" className="form-label">Name of Product</label>
                <input 
                type="name" 
                className="form-control" 
                id="exampleInputName1" 
                aria-describedby="nameHelp"
                name='name'
                value={name}
                onChange={handleName}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPrice1" className="form-label">Price</label>
                <input 
                type="price" 
                className="form-control" 
                id="exampleInputPrice1"
                name='price'
                value={price}
                onChange={handlePrice}
                />
            </div>
            <div className='d-grid'>
                <button type="submit" className="btn btn-danger">Set Price</button>
            </div>
                
            </form>
    </div>
  )
}

export default Product
=======
import React, {useState, useEffect, useContext} from 'react';
import { ProductContext } from '../context/ProductProvider';

const Product = () => {
    
    const {addProduct, deleteProduct } = useContext(ProductContext)
    let [name, setName] = useState('');
    let [price, setPrice] = useState('');


    const handleName = (e) =>{
        setName(e.target.value)
    }
    const handlePrice = (e) =>{
        setPrice(e.target.value)
    }
    const submit = async(event) => {
        event.preventDefault()
        addProduct(name, price);
        console.log("Name: ",name, " Price: ", price)
        alert("Check price of product in console.log")
    }
    
  return (
    <div className='container w-50 my-5 '>
      <form onSubmit={submit}>
        <h2>Set Product Price</h2>
            <div className="mb-3">
                <label htmlFor="exampleInputName1" className="form-label">Name of Product</label>
                <input 
                type="name" 
                className="form-control" 
                id="exampleInputName1" 
                aria-describedby="nameHelp"
                name='name'
                value={name}
                onChange={handleName}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPrice1" className="form-label">Price</label>
                <input 
                type="price" 
                className="form-control" 
                id="exampleInputPrice1"
                name='price'
                value={price}
                onChange={handlePrice}
                />
            </div>
            <div className='d-grid'>
                <button type="submit" className="btn btn-danger">Set Price</button>
            </div>
                
            </form>
    </div>
  )
}

export default Product
>>>>>>> 78ef44e09afa2a867a52a71d0ba124618848776f
