import React, { Component } from 'react'

export default class Child extends Component {
    
    render() {
       const {value} = this.props;
        return (
            <div>
                <div className="my-5" style={{"border":"2px solid grey", "width":"30%","margin":"0 auto", "borderRadius":"25px"}}>
            <h2>{value}</h2>
         </div>
            </div>
        )
    }
}

