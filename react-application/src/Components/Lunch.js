import React from 'react'
import "../App.css";
import data from "./LunchData"
import Card from "./Card"
function Lunch() {
    return (
        <div className="body">
        {data.map((item, i) => (<Card items={item} index={i} key={i} />))}
      </div>
    )
}

export default Lunch
