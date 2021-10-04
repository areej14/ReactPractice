import React from 'react'
import "../App.css";
import data from "./AllData"
function All() {
    return (
        
            <div className="body">
        {data.map((item, i) => (<Card items={item} index={i} key={i} />))}
      </div>
       
    )
}

export default All
