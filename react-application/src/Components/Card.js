import React from 'react'
import "../App.css";
import PropTypes from 'prop-types';

const Card = (props) => {
  const {items :{title,src,price,content}}=props;
  // console.log(typeof title)
  // console.log(typeof src)
  // console.log(typeof price)
  // console.log(typeof content)
   return (
       <>
         <div>
           <h1>{props.student}</h1>
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
       
          Card.propTypes={
            
            price: PropTypes.string,
            student: PropTypes.number
            
          }; 

export default Card
            // title: PropTypes.number,
            // src: PropTypes.number,
            // content:PropTypes.number,
           