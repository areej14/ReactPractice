import React from 'react'
import List from './newData.jsx'
import "../App.css"
import Card from './Card'


const Cardmap = () => {
    return (
        <div className="body">
            {List.map((item,i) =><Card title={item.title} price={item.price} src={item.src} content={item.content} student="areej" key={i}/>)}
        </div>
    )
}
// items={item}

export default Cardmap
