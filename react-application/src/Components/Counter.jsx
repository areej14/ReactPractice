import React from 'react'
import  { useState } from 'react'

function Counter() {
    const [value, setvalue] = useState(0)
    return (
        <div>
            <h1>{value}</h1>
            <button className="btn btn-primary mx-2"onClick={()=>setvalue(value+1)}>+</button>
            <button className="btn btn-primary mx-2"onClick={()=>setvalue(value-1)}>-</button>
        </div>
    )
}

export default Counter
