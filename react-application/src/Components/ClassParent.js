import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Child from './Child'

export default class ClassParent extends Component {
    constructor(){
        super()
        this.state = { 
            value:0,
            lock :"Lock",
            theme: "Enable Dark Mode"
            }
    }
    static propTypes = {
        prop: PropTypes
    }
     Add=()=>{
        (this.state.lock==="Lock")?this.setState({value:this.state.value+1}):alert("Counter is in Lock Mode")
    };
     Del=()=>{
        if((this.state.value>0)||(this.state.value>1)){
        (this.state.lock==="Lock")?this.setState({value: this.state.value-1}):alert("Counter is in Lock Mode")
        }
        else
        alert("No is less than 0")
    };
    
    Lock=()=>{
        (this.state.lock==="Lock")?
        this.setState({lock:"UnLock"}):this.setState({lock:"Lock"})  
    };

     Darkmode=()=>{
       if  (this.state.lock==="UnLock"){
          alert("Counter is in Lock Mode")
       }
    else{if( this.state.theme==='Enable Dark Mode'){
        this.setState({theme:'Disable Dark Mode'})
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
       }
       else{
        this.setState({theme:'Enable Dark Mode'})
           document.body.style.backgroundColor='#f3f0ed94';
           document.body.style.color='black';
            
           }
       }}
        Reset=()=>{
        (this.state.lock==="Lock")?this.setState({value:0}):alert("Counter is in Lock Mode")
    }
    render() {
        return (
            <>
        
            <h1 style={{"textAlign":"center"}}><u>COUNTER</u></h1>
            <div className="Par" style={{"textAlign":"center","width":"30%","height":"500px", "margin":"auto","padding":"10px","borderRadius":"15px", "border":"2px solid grey"}} >
               
                <Child  value={this.state.value}/>
                <button  className="btn btn-warning mx-2 my-2" onClick={this.Reset}>Reset <i style={{color: 'white'}}class="fas fa-power-off"></i></button><br/>
                <button className="btn btn-success mx-3 my-3" onClick={this.Add}>Add <i className="fas fa-plus-circle"></i></button>
                <button  className="btn btn-danger  mx-3" onClick={this.Del}>Del <i className="fas fa-minus-circle"></i></button><br/>
                <button  className="btn btn-secondary  mx-1" onClick={this.Darkmode}>{this.state.theme} <i className="fas fa-adjust"></i></button>
                <button   className="btn btn-info  mx-3" onClick={this.Lock}>{this.state.lock} <i className="fas fa-lock"></i></button><br/>
                 
            </div>
            </>
        )
    }
}
