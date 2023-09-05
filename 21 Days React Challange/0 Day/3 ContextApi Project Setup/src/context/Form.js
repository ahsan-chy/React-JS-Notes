<<<<<<< HEAD
// import React, { useRef, useState } from 'react'

// const Form = () => {
//   const [product, setProduct] = useState({
//     title: "",
//     desc: "",
//     price: 0,
//     category: "",
//     tags: [],
//     image: {
//       sm: "",
//       md: "",
//       lg: "",

//     },
//     quantity: 0,
//   })

//   // -- Handle input changes
//   const handleChange = (e) => {
//     setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }))
//   }
//   const tagRef = useRef();

//   const handleTags = () => {
//     const tags = tagRef.current.value.split(",");
//     tags.forEach((tag) => {
//       setProduct((prev) => ({ ...prev, tags: [...prev.tags, tag] }));   //- Don't worry about tags,
//     });
//   };

//   const handleRemoveTag = (tag) => {
//     setProduct((prev) => ({
//       ...prev,
//       tags: prev.tags.filter((t) => t !== tag),
//     }));
//   };

//   const handleIncrease = () => {
//     setProduct((prev) => ({ 
//       ...prev, 
//       quantity: prev.quantity + 1 
//     }));
//   };

//   const handleDecrease = () => {
//     setProduct((prev) => ({
//       ...prev,
//       quantity: prev.quantity - 1,
//     }));
//   };
//   const submit = (e) => {
//     e.preventDefault();
//     console.log('title : ', product.title);
//     console.log('description : ', product.desc);
//     console.log('price : ', product.price);
//     console.log('category :>> ', product.category);
//     console.log('tag :>> ', product.tag);
//   };

//   return (
//     <div>
//       <div>
//         <form onSubmit={submit}>
//           <input
//             type="text"
//             name="title"
//             onChange={handleChange}
//             placeholder="Title"
//           />
//           <input
//             type="text"
//             name="desc"
//             onChange={handleChange}
//             placeholder="Desc"
//           />
//           <input
//             type="number"
//             name="price"
//             onChange={handleChange}
//             placeholder="Price"
//           />
//           <p>Category:</p>
//           <select name="category" id="category" onChange={handleChange}>
//             <option value="sneakers">Sneakers</option>
//             <option value="tshirts">T-shirts</option>
//             <option value="jeans">Jeans</option>
//           </select>
//           <p>Tags:</p>
//           <textarea
//             ref={tagRef}
//             placeholder="Seperate tags with commas..."
//           ></textarea>
//           <button type="button" onClick={handleTags}>
//             Add Tags
//           </button>
//           <div className="tags">
//             {product?.tags?.map((tag) => (
//               <small key={tag} onClick={() => handleRemoveTag(tag)}>
//                 {tag}
//               </small>
//             ))}
//           </div>
//           <div className="quantity">
//             <button type="button" onClick={handleDecrease}>
//               -
//             </button>
//             <span>Quantity ({product.quantity})</span>
//             <button type="button" onClick={handleIncrease}>
//               +
//             </button>
//           </div>
//           <button type="submit" className="btn btn-danger mt-5">Submit </button>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default Form

import React, { useReducer } from 'react';
import { formReducer, INITIAL_STATE } from './FormReducer';
import { useRef } from 'react';

const Form = () => {

  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const tagRef = useRef()

  const handleChange = (event) => {
    dispatch({type: "CHANGE_INPUT", payload: {name: event.target.name, value: event.target.value}});
  }
  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach(tag => {
      dispatch({type: "ADD_TAG", payload: tag})
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(' ', state.title);
    console.log(' ', state.desc);
    console.log(' ', state.price);
    console.log(' ', state.category);
    console.log(' ', state.quantity);
  };

return (
  <div style={{display:'flex', justifyContent:'center', marginTop: '30px'}}>
    <div>
      <h2>useState - useReducer Hook</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="desc"
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          placeholder="Price"
        />
        <p>Category:</p>
        <select name="category" id="category" onChange={handleChange}>
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea
          ref={tagRef}
          placeholder="Seperate tags with commas..."
        ></textarea>
        <button type="button" onClick={handleTags}>
          Add Tags
        </button>
        <div className="tags">
          {state?.tags?.map((tag) => (
            <small key={tag} onClick={() => dispatch({type: "REMOVE_TAG", payload: tag})}>
              {tag}
            </small>
          ))}
        </div>
        <div className="quantity">
          <button type="button" onClick={() => dispatch({type: "DECREMENT"})}>
            -
          </button>
          <span>Quantity ({state.quantity})</span>
          <button type="button" onClick={() => dispatch({type: "INCREMENT"})}>
            +
          </button>
        </div>
        <button type="submit" className="btn btn-danger mt-5">Submit </button>

      </form>
    </div>
  </div>
)
}

=======
// import React, { useRef, useState } from 'react'

// const Form = () => {
//   const [product, setProduct] = useState({
//     title: "",
//     desc: "",
//     price: 0,
//     category: "",
//     tags: [],
//     image: {
//       sm: "",
//       md: "",
//       lg: "",

//     },
//     quantity: 0,
//   })

//   // -- Handle input changes
//   const handleChange = (e) => {
//     setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }))
//   }
//   const tagRef = useRef();

//   const handleTags = () => {
//     const tags = tagRef.current.value.split(",");
//     tags.forEach((tag) => {
//       setProduct((prev) => ({ ...prev, tags: [...prev.tags, tag] }));   //- Don't worry about tags,
//     });
//   };

//   const handleRemoveTag = (tag) => {
//     setProduct((prev) => ({
//       ...prev,
//       tags: prev.tags.filter((t) => t !== tag),
//     }));
//   };

//   const handleIncrease = () => {
//     setProduct((prev) => ({ 
//       ...prev, 
//       quantity: prev.quantity + 1 
//     }));
//   };

//   const handleDecrease = () => {
//     setProduct((prev) => ({
//       ...prev,
//       quantity: prev.quantity - 1,
//     }));
//   };
//   const submit = (e) => {
//     e.preventDefault();
//     console.log('title : ', product.title);
//     console.log('description : ', product.desc);
//     console.log('price : ', product.price);
//     console.log('category :>> ', product.category);
//     console.log('tag :>> ', product.tag);
//   };

//   return (
//     <div>
//       <div>
//         <form onSubmit={submit}>
//           <input
//             type="text"
//             name="title"
//             onChange={handleChange}
//             placeholder="Title"
//           />
//           <input
//             type="text"
//             name="desc"
//             onChange={handleChange}
//             placeholder="Desc"
//           />
//           <input
//             type="number"
//             name="price"
//             onChange={handleChange}
//             placeholder="Price"
//           />
//           <p>Category:</p>
//           <select name="category" id="category" onChange={handleChange}>
//             <option value="sneakers">Sneakers</option>
//             <option value="tshirts">T-shirts</option>
//             <option value="jeans">Jeans</option>
//           </select>
//           <p>Tags:</p>
//           <textarea
//             ref={tagRef}
//             placeholder="Seperate tags with commas..."
//           ></textarea>
//           <button type="button" onClick={handleTags}>
//             Add Tags
//           </button>
//           <div className="tags">
//             {product?.tags?.map((tag) => (
//               <small key={tag} onClick={() => handleRemoveTag(tag)}>
//                 {tag}
//               </small>
//             ))}
//           </div>
//           <div className="quantity">
//             <button type="button" onClick={handleDecrease}>
//               -
//             </button>
//             <span>Quantity ({product.quantity})</span>
//             <button type="button" onClick={handleIncrease}>
//               +
//             </button>
//           </div>
//           <button type="submit" className="btn btn-danger mt-5">Submit </button>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default Form

import React, { useReducer } from 'react';
import { formReducer, INITIAL_STATE } from './FormReducer';
import { useRef } from 'react';

const Form = () => {

  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const tagRef = useRef()

  const handleChange = (event) => {
    dispatch({type: "CHANGE_INPUT", payload: {name: event.target.name, value: event.target.value}});
  }
  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach(tag => {
      dispatch({type: "ADD_TAG", payload: tag})
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(' ', state.title);
    console.log(' ', state.desc);
    console.log(' ', state.price);
    console.log(' ', state.category);
    console.log(' ', state.quantity);
  };

return (
  <div style={{display:'flex', justifyContent:'center', marginTop: '30px'}}>
    <div>
      <h2>useState - useReducer Hook</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="desc"
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          placeholder="Price"
        />
        <p>Category:</p>
        <select name="category" id="category" onChange={handleChange}>
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea
          ref={tagRef}
          placeholder="Seperate tags with commas..."
        ></textarea>
        <button type="button" onClick={handleTags}>
          Add Tags
        </button>
        <div className="tags">
          {state?.tags?.map((tag) => (
            <small key={tag} onClick={() => dispatch({type: "REMOVE_TAG", payload: tag})}>
              {tag}
            </small>
          ))}
        </div>
        <div className="quantity">
          <button type="button" onClick={() => dispatch({type: "DECREMENT"})}>
            -
          </button>
          <span>Quantity ({state.quantity})</span>
          <button type="button" onClick={() => dispatch({type: "INCREMENT"})}>
            +
          </button>
        </div>
        <button type="submit" className="btn btn-danger mt-5">Submit </button>

      </form>
    </div>
  </div>
)
}

>>>>>>> 78ef44e09afa2a867a52a71d0ba124618848776f
export default Form