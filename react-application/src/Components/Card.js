import React from 'react'
import "../App.css"
const Card = (props) => {

  const { items: { title, img, category, price, desc }, index } = props;


  return (
    <>

      <div>
        <div className="card cardb" style={{ "width": "18rem" }}>
          <h4>Item {index + 1}</h4>
          <img className="card-img-top image" src={img} alt="Card  cap" />
          <h4><u>{title}</u></h4>
          <div className="card-body">
            <h4><b><u> {category}</u></b></h4>
            <h5 className="card-title"><u><b>Price: </b>{price}$</u></h5>
            <p className="card-text">"{desc}"</p>
          </div>
        </div>

      </div>

    </>






  )
}



export default Card
