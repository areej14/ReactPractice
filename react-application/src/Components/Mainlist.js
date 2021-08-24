import React from 'react'
import List from './newData.jsx'
import "../App.css"
import ListItem from './ListItem'
const Mainlist = () => {
    return (
        <div className="body">
            {List.map((item,i) =><ListItem items={item} key={i}/>)}
        </div>
    )
}

export default Mainlist
