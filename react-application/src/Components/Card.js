import React, { useState } from 'react'
// import "../App.css";


const Card = ({data,fun}) => {

  const [Readmore, setReadmore] = useState(false)
  const show = (position) => {
    Readmore === position ?
      setReadmore(false) : setReadmore(position)
  }
  return (
    <>

         <div className="card cardb" >
          <h4>{data.title}</h4>
          
          <div className="card-body">
            {/* <h5 className="card-title"><mark>{data.duties}</mark></h5> */}
            <p className="card-text">{Readmore === data.id ? data.dutied : (data.duties.slice(0, 87))}
              <span onClick={() => show(data.id)}>{Readmore === data.id ? ( <button className="btn btn-info btn-sm mx-2" style={{outline:'none', border: 'none'}}> Read Less </button>):(<button  className="btn btn-sm btn-info mx-2" style={{outline:'none', border: 'none'}}> Read More </button>)}</span>
            </p>
            {/* <button className="btn btn-danger" onClick={() => fun(data.id)}>Not Interested</button> */}
          </div>

         </div>
      

    </>
  )
}



export default Card

