import React, { useEffect, useState } from 'react'
import "../App.css"
import Button from './Button'
import Card from './Card'
// import Card from './Card'
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
    const show = (i) => {

        let a =input.filter((api) => api.title === i)
        setinput(a)
console.log(a);

    }
    useEffect(() => {
        Api()

    }, [])
    return (
        <>
        {(input.length !== 0) ? 
        (<div><u><h2>Tour List</h2></u>
            <div className="body">
                {buttonlist.map((btns)=><button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"onClick={() =>show(btns.title)} aria-controls="offcanvasTop">{btns.company}</button>)}
                {input.map((item, i) =><div><Card data={item} key={i}  /></div>)}
            </div></div>)
             : <Loader fun={Api} />}
        </>
    )
}

export default Cardmap
