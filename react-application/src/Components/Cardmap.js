import React from 'react'
import List from './newData.jsx'
import "../App.css"
import Card from './Card'


const Cardmap = () => {
    return (
        <div className="body">
            {List.map((item,i) =><Card items={item} student="areej" key={i}/>)}
        </div>
    )
}


export default Cardmap
