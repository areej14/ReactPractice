import React,{useState} from 'react'
import './style.css'
import Child from './Child'
function Parent() {
    const [value, setvalue] = useState(0)
    const [lock, setlock] = useState("Lock")
    const [theme, settheme] = useState("Enable Dark Mode")
    
    
    const Add=()=>{
        (lock==="Lock")?setvalue(value+1):alert("Counter is in Lock Mode")
    };
    const Del=()=>{
        if(value>0||value>1){
        (lock==="Lock")?setvalue(value-1):alert("Counter is in Lock Mode")
        }
        else
        alert("No is less than 0")
    };
    
    const Lock=()=>{
        (lock==="Lock")?
        setlock("UnLock"):setlock("Lock")   
    };

    const Darkmode=()=>{
       if  (lock==="UnLock"){
          alert("Counter is in Lock Mode")
       }
    else{if( theme==='Enable Dark Mode'){
        settheme('Disable Dark Mode')
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
       }
       else{
           settheme('Enable Dark Mode')
           document.body.style.backgroundColor='#f3f0ed94';
           document.body.style.color='black';
            
           }
       }}
     
    return (
        <>
        
        <h1 style={{"textAlign":"center"}}><u>COUNTER</u></h1>
        <div className="Par" style={{"textAlign":"center","width":"30%","height":"500px", "margin":"auto","padding":"10px","borderRadius":"15px", "border":"2px solid grey"}} >
           
            <Child  value={value}/>
            <button className="btn btn-success mx-3 my-3" onClick={Add}>Add <i className="fas fa-plus-circle"></i></button>
            <button  className="btn btn-danger  mx-3" onClick={Del}>Del <i className="fas fa-minus-circle"></i></button><br/>
            <button  className="btn btn-secondary  mx-1" onClick={Darkmode}>{theme} <i className="fas fa-adjust"></i></button>
            <button   className="btn btn-info  mx-3" onClick={Lock}>{lock} <i className="fas fa-lock"></i></button><br/>

        </div>
        </>
    )
}

export default Parent
