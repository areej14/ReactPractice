import React from 'react'
import "../App.css"
import List from '../data.js'

const Class4 = () => {
    return (
      <div>
      <h2>IMAGE GALLERY</h2>
        <div className="body">
          
             {List.map((item,i) =>(
            <div key={i} className="card cardb" style={{"width": "18rem"}}>
              <h4> Person {item.id}</h4>
            <img className="card-img-top image" src={item.image} alt="Card  cap" />
            <div className="card-body">
              <h5 className="card-title"><mark>{item.name}</mark></h5>
              <p className="card-text"><mark>My age is {item.age}</mark></p>
            </div>
          </div>
          
))} 

        </div>
        </div>
    )
}

export default Class4
