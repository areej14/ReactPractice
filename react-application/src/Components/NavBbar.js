import React from 'react'
import {Link} from "react-router-dom";

function NavBbar() {
    return (
        <>
        <h2>Menu Card</h2>
        <div className="btns">
        <Link to="/" className="btn btn-success  mx-2" >All</Link>
        <Link to="/Shake"className="btn btn-warning text-white mx-2" >Shake</Link>
        <Link to="/Breakfast"className="btn btn-primary mx-2" >Breakfast</Link>
        <Link to="/Lunch"className="btn btn-info mx-2" >Lunch </Link>
      
      </div>
      </>
    )
}

export default NavBbar
