import React, { useRef, useState, useEffect } from 'react'

function Input() {
    const Previous = useRef('')
    const [data, setdata] = useState([])
    const [value, setvalue] = useState()
    
    useEffect(() => {
           console.log(value);
        Previous.current = value
        console.log('useeffect')
        console.log(Previous.current)
    })
    const show = () => {
        setdata([...data, value])
        Previous.current.style.color ='blue';

    }
    return (
        <div >
            <input value={value}  onChange={(e) => setvalue(e.target.value)} />
            <p ref={Previous}>previous value is:  {value === '' ? 'its your first val' : Previous.current}</p>
            <button onClick={show}>Submit</button>
            {data.map((item) => <div><li>{item}</li></div>)}
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

