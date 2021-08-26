import React from 'react'
import "../App.css"
const Card = (props) => {
 
   const {items} = props;
   return (
       <>
         <div>
          
           <div  className="card cardb" style={{"width": "18rem"}}>
           <h4>  {items.title}</h4>
         <img className="card-img-top image" src={items.src} alt="Card  cap" />
         <div className="card-body">
           <h5 className="card-title"><mark><b>Price: </b>{items.price} $</mark></h5><hr/><hr/>
           <p className="card-text"><mark><b> {items.content}</b></mark></p>
         </div>
        
       </div>
      
       </div>
      
       </>
       


     
     
     
 )
          }
       
   

export default Card
