import React, { Component } from 'react'


export class ClassComponent extends Component {
  
    render() {
     const { arr:[a,b,c,d ,{object: {name,email,showName}} ] }  = this.props;
//   console.log(a,b,c,d);
//   const { object :{name,email,showName} } = object;
//   console.log(name,email,showName);
 
console.log(this.props)

        return (
            <div style={{"textAlign": "center",}}>
                <h2>Cities are<br/> {a}, {b}, {d} and {c}</h2>
                <h4>Name is {name} <br/>and<br/> email is {email}</h4>
                <button className="btn btn-primary" onClick={showName}>Click</button>
                
            </div>
        )
    }
}

export default ClassComponent
