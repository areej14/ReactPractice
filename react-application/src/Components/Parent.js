import React,{useState} from 'react'
import Child from './Child'
function Parent() {
    const [value, setvalue] = useState(0)
    const [lock, setlock] = useState(true)
    const [theme, settheme] = useState("black")
    const [locktext, setlocktext] = useState("Lock")
    const Add=()=>{
        console.log('add');
        (lock)?setvalue(value+1):alert("Counter is in lock mode")
    };
    const Del=()=>{
        console.log('del');
        if(value>0||value>1){
        (lock)?setvalue(value-1):alert("Counter is in lock mode")
        }
        else
        alert("No is less than 0")
    };
    
    const Lock=()=>{
        if(lock===true){
        setlock(false)
        setlocktext("UnLock")
}
else{
    setlock(true)
        setlocktext("Lock")
}
        
    };
<<<<<<< Updated upstream
    const Darkmode=()=>{
       if  (lock==false){
          alert("counter is in lock mode")
       }
    else{if( theme==='white'){
        settheme('black')
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
       }
       else{
           settheme('white')
            document.body.style.backgroundColor='black';
            document.body.style.color='white';
           }
       }}
     
    return (
        <>
        
        <h1 style={{"textAlign":"center"}}><u>COUNTER</u></h1>
        <div style={{"textAlign":"center","width":"50%","height":"400px", "margin":"10px auto","padding":"10px","borderRadius":"15px", "border":"2px solid grey"}} >
           
            <Child  value={value}/>
            <button class="btn btn-success mx-3" onClick={Add}>Add <i class="fas fa-plus-circle"></i></button>
            <button  class="btn btn-danger  mx-3" onClick={Del}>Del <i class="fas fa-minus-circle"></i></button>
            <button  class="btn btn-secondary  mx-3" onClick={Darkmode}>DarkMode <i class="fas fa-adjust"></i></button>
            <button   class="btn btn-info  mx-3" onClick={Lock}>{locktext} <i class="fas fa-lock"></i></button><br/>
       
      
=======
    // const DarkMode=()=>{
    //     settheme(style=
    //         {
    //         backgroundColor: theme,
    //     }
    //     )
    // }
    return (
        <div style={{style="backgroundColor":"black"}}>
            <Child value={value}/>
            <button onClick={Add}>Add</button>
            <button onClick={Del}>Delete</button>
            <button onClick={DarkMode}>DarkMode</button>
            <button onClick={Lock}>Lock</button>
>>>>>>> Stashed changes
        </div>
        </>
    )
}

export default Parent
