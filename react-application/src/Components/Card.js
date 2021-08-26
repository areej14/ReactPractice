import React from 'react'
import "../App.css"
const Card = (props) => {
 
   const {items :{title,src,price,content}} = props;
   return (
       <>
         <div>
          
           <div  className="card cardb" style={{"width": "18rem"}}>
           <h4>  {title}</h4>
         <img className="card-img-top image" src={src} alt="Card  cap" />
         <div className="card-body">
           <h5 className="card-title"><mark><b>Price: </b>{price} $</mark></h5><hr/><hr/>
           <p className="card-text"><mark><b> {content}</b></mark></p>
         </div>
        
       </div>
      
       </div>
      
       </>
       


     
     
     
 )
          }
       
   

export default Card
