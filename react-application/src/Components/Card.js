import React from 'react'
import "../App.css";
import PropTypes from 'prop-types';

const Card = (props) => {
  console.log(props);
   const {title}=props;
  // const {items :{title,src,price,content}}=props;
  // console.log(typeof title)
  // console.log(typeof src)
  // console.log(typeof price)
  // console.log(typeof content)
   return (
       <>
         <div>
           
           <div  className="card cardb" style={{"width": "18rem"}}>
           <h4>  {title}</h4>
         <img className="card-img-top image" src={props.src} alt="Card  cap" />
         <div className="card-body">
           <h5 className="card-title"><mark><b>Price: </b>{props.price} $</mark></h5><hr/><hr/>
           <p className="card-text"><mark><b> {props.content}</b></mark></p>
         </div>
       
       </div>
      
       </div>
      
       </>   
 )
          }
       
          Card.propTypes={
             title: PropTypes.string,
            src: PropTypes.string,
            content:PropTypes.string,
            price: PropTypes.number
            
          }; 

export default Card
           
           