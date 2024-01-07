<<<<<<< HEAD
import React, { useState } from 'react'

export default function News(props) {

  return (
    <div className="card" >
      <img src={!props.imgurl?"https://picsum.photos/200":props.imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-success">{props.cetagory} </h5>
          <h5 className="card-title text-danger">{props.title} </h5>
          <p className="card-text">{props.discription}</p>
          <a href="#" className="btn btn-primary">View News</a>
        </div>
    </div>
  )
}
=======
import React, { useState } from 'react'

export default function News(props) {

  return (
    <div className="card" >
      <img src={!props.imgurl?"https://picsum.photos/200":props.imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-success">{props.cetagory} </h5>
          <h5 className="card-title text-danger">{props.title} </h5>
          <p className="card-text">{props.discription}</p>
          <a href="#" className="btn btn-primary">View News</a>
        </div>
    </div>
  )
}
>>>>>>> 78ef44e09afa2a867a52a71d0ba124618848776f
