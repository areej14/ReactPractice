import React from 'react'
import "../App.css"
const ListItem = (props) => {
   const {items} = props;
    console.log(props);
    return (
        <div className="list">
        
            <div className="body">
          
         
         <div key={props.key} className="cardb" style={{"width": "18rem"}}>
           <h4>  {items.title}</h4>
         <img className="card-img-top image" src={items.src} alt="Card  cap" />
         <div className="card-body">
           <h5 className="card-title"><mark>{items.price} $</mark></h5>
           <p className="card-text"><mark> {items.content}</mark></p>
         </div>
       </div>
       


     </div>
     </div>
     
 )
          }
       
   

export default ListItem
