import React, { Component } from 'react'
import List from './newData.jsx'
import "../App.css"
import Card from './Card.js'
export class Cardmap extends Component {
    render() {
        return (
            <div>
                 <div className="body">
            {List.map((item,i) =><Card items={item} key={i}/>)}
        </div>
            </div>
        )
    }
}

export default Cardmap
