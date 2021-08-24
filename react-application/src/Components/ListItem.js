import React from 'react'
import "../App.css"
const ListItem = (props) => {
 
   const {items} = props;
  
  
   
    return (
       <>
         <div className="body">
          
          
         <div  className="card cardb" style={{"width": "18rem"}}>
           <h4>  {items.title}</h4>
         <img className="card-img-top image" src={items.src} alt="Card  cap" />
         <div className="card-body">
           <h5 className="card-title"><mark>{items.price} $</mark></h5><hr/><hr/>
           <p className="card-text"><mark> {items.content}</mark></p>
         </div>
        
       </div>
      
       </div>
      
       </>
       


     
     
     
 )
          }
       
   

export default ListItem
