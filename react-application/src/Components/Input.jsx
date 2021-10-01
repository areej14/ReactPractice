import React, { useRef, useState, useEffect } from 'react'

function Input() {
    const prev = useRef()
    const style = useRef()
    const input = useRef()
    const [value, setvalue] = useState('')
    const [flag, setflag] = useState(false)

    useEffect(() => {

        prev.current = value
         style.current.style.fontFamily ="monospace";
         input.current.style.backgroundColor ='rgb(219, 233, 233)'
         style.current.style.textAlign='center'

    })
    let pre = prev.current
    const show = () => {
        setvalue(input.current.value)
        setflag(true)
        input.current.value = "";



    }

    return (
        <div  ref={style} >
            <input className="my-2" ref={input} />

            <button className="btn btn-sm btn-outline-primary mx-2" onClick={show}>Submit</button><br />
            <div className="d-flex bd-highlight">
                <div className="p-2 flex-fill bd-highlight"> <h5>Previous Value:{flag && <p>{pre === '' ? 'No prev Value' : pre}</p>}</h5></div>
                <div className="p-2 flex-fill bd-highlight"><h5>Current Value:<br />{value}</h5></div>

            </div>
            <table className="table table-success table-striped">
                <tr>
                    <td>
                    </td>
                    <td> </td>
                </tr>
            </table>
            <table>

            </table>



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
//       <h2>prev value : {lastval.current}</h2><br />
//     </div>
//   )
// }

