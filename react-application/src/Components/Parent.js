import React,{useState} from 'react'
import Child from './Child'

function Parent() {
    const [value, setvalue] = useState(0)
    const [lock, setlock] = useState(false)
    const [theme, settheme] = useState("black")
    const Add=()=>{
        console.log('add');
        (lock)?setvalue(value+1):alert("Counter is in lock mode")
    };
    const Del=()=>{
        console.log('del');
        (lock)?setvalue(value-1):alert("Counter is in lock mode")
    };
    const DarkMode=()=>{
        console.log('theme')
    };
    const Lock=()=>{
        console.log('lock')
        setlock(!lock)
    };
    // const DarkMode=()=>{
    //     settheme(style={
    //         backgroundColor:"black",
    //     })
    // }
    return (
        <div>
            <Child value={value}/>
            <button onClick={Add}>Add</button>
            <button onClick={Del}>Delete</button>
            <button onClick={DarkMode}>DarkMode</button>
            <button onClick={Lock}>Lock</button>
        </div>
    )
}

export default Parent
