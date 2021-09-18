import React, { useEffect, useState } from 'react'
import "../App.css"
import Card from './Card'
import Loader from './Loader'


const Cardmap = () => {
    const [input, setinput] = useState([])

    async function Api() {
        try {
            let url = await fetch("https://course-api.com/react-tours-project");
            let data = await url.json();
            setinput(data)

        } catch (error) {
            alert("Error: " + error.message)
        }



    }
    const remove = (i) => {

        setinput(input.filter((api) => api.id !== i))


    }
    useEffect(() => {
        Api()

    }, [])
    return (
        <>{(input.length !== 0) ? (<div><u><h2>Tour List</h2></u>
            <div className="body">
                {input.map((item, i) => <Card data={item} key={i} fun={remove} />)}
            </div></div>) : <Loader fun={Api} />}
        </>
    )
}

export default Cardmap
