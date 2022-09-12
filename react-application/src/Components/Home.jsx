 import React from 'react'
import Products from './Products'
 
 const Home = () => {
   return (
     <div><div className="card text-bg-dark text-white border-0">
     <img src="https://images.pexels.com/photos/3775138/pexels-photo-3775138.jpeg?auto=compress&cs=tinysrgb&w=400" className="card-img" alt="Background" height="500px" />
     <div className="card-img-overlay d-flex flex-column justify-content-center">
       <div className="container">
       <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
       <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
       </div>
     </div>
   </div>
  <Products/> 
   </div>
   ) 
 }
 
 export default Home