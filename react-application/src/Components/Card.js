import React, { useState } from 'react'
import "../App.css";


const Card = ({data,fun}) => {

  const [Readmore, setReadmore] = useState(false)
  const show = (position) => {
    Readmore === position ?
      setReadmore(false) : setReadmore(position)
  }
  return (
    <>

         <div className="card cardb" >
          <h4>{data.name}</h4>
          <img className="card-img-top image" src={data.image} alt="Card  cap" />
          <div className="card-body">
            <h5 className="card-title"><mark><b>Price: </b>{data.price}$</mark></h5>
            <p className="card-text">{Readmore === data.id ? data.info : (data.info.slice(0, 27))}
              <span onClick={() => show(data.id)}>{Readmore === data.id ? ( <button className="btn btn-info mx-2" style={{outline:'none', border: 'none'}}> Read Less </button>):(<button  className="btn btn-info mx-2" style={{outline:'none', border: 'none'}}> Read More </button>)}</span>
            </p>
            <button className="btn btn-danger" onClick={() => fun(data.id)}>Not Interested</button>
          </div>

         </div>
      

    </>
  )
}



export default Card

