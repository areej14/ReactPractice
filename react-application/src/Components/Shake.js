import React from 'react'
import "../App.css";
import data from "./ShakeData"
import Card from "./Card"
function Shake() {
    return (
        <div className="body">
        {data.map((item, i) => (<Card items={item} index={i} key={i} />))}
      </div>
    )
}

export default Shake
