import React, {useRef, useState, useEffect } from 'react'

function Input() {
    const Previous = useRef()
    const input = useRef()
    const [data, setdata] = useState([])
    const [value, setvalue] = useState()
    
    useEffect(() => {
        //    console.log(value);
        Previous.current = value
        // console.log('useeffect')
        console.log(Previous.current)
        
    })
    let pre=Previous.current
    const show = () => {
        setvalue(input.current.value)
        

    }
    
    return (
        <div >
            <input  ref={input} />
            {/* <p ref={Previous}>previous value is:  {value === '' ? 'its your first val' : pre}</p> */}
            <li>{value}</li>
            <button onClick={show}>Submit</button>
            <li>{pre}</li>
           
        </div>
    )
}

export default Input
// import React, { useEffect, useState, useRef } from 'react'

// function App() {
//   const [count, setcount] = useState(0)
//   return (
//     <div>
//       <Usr count={count} />
//       <button onClick={() => setcount(Math.floor(Math.random() * 10))} >Update</button>
//     </div>
//   )
// }

// export default App


// //!-------------------------------------------------


// ////////////////Usr.js



// function Usr(props) {


//   const lastval = useRef();

//   useEffect(() => {
//     lastval.current = props.count
//     console.log('useeffcet')
//     console.log(lastval.current)
//   })


//   return (
//     <div>
//       <br /><h1>Current value : {props.count}</h1><br />
//       <h2>Previous value : {lastval.current}</h2><br />
//     </div>
//   )
// }

