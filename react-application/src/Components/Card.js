import React from 'react'
import "../App.css"
const Card = (props) => {

  const { items: { title, img, category, price, desc }, index } = props;


  return (
    <>

      <div>
        <div className="card cardb" style={{ "width": "18rem" }}>
          <h4>{index + 1}. {title}</h4>
          <img className="card-img-top image" src={img} alt="Card  cap" />
          <div className="card-body">
            <h5 className="card-title"><b>Price: </b>{price} $</h5>
            <p className="card-text"><b> {category}</b><br />{desc}</p>
          </div>
        </div>

      </div>

    </>






  )
}



export default Card
