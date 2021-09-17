import React,{useState} from 'react'
import "../App.css";


const Card = (props) => {
  const [Readmore, setReadmore] = useState(false)
  const show=(index)=>{
    Readmore===index?
setReadmore(false):setReadmore(index)
  }
   return (
       <>
         <div>
           
           <div  className="card cardb" style={{"width": "18rem"}}>
           <h4>  {props.title}</h4>
         <img className="card-img-top image" src={props.src} alt="Card  cap" />
         <div className="card-body">
           <h5 className="card-title"><mark><b>Price: </b>{props.price} $</mark></h5><hr/><hr/>
           <p className="card-text"><mark><b>{Readmore===props.key ? props.content : (props.content.slice(0, 10))}
          <span onClick={() => show(props.key)}>{Readmore===props.key ? (<a href="#" >Read Less </a>) : 
            (<a href="#" >... Read More </a>)}</span>
           </b></mark></p>
       
       </div>
      
       </div>
       </div>
      
       </>   
 )
          }
       
         

export default Card
           
           