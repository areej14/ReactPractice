import React, { useEffect, useState } from 'react'
import "../App.css"
import Button from './Button'

import Details from './Details'

import Loader from './Loader'


const Cardmap = () => {
    const [input, setinput] = useState([])
    const [buttonlist, setbuttonlist] = useState([])


    async function Api() {
        try {
            let url = await fetch("https://course-api.com/react-tabs-project");
            let data = await url.json();
            setinput(data)
            setbuttonlist(data)

        } catch (error) {
            alert("Error: " + error.message)
        }
 


    }
   const show=(i)=>{
       setinput(input.filter((array)=>(array.company===i)))
   }
    useEffect(() => {
        Api()

    }, [])
    return (
        <>
        {/* {(input.length !== 0) ?  */}
        (
            <div className="body">
                <Button data={buttonlist} fun={show}/>
                
                {<Details list={input}   />}
            </div>
            )
             {/* : <Loader fun={Api} />} */}
        </>
    )
}

export default Cardmap
