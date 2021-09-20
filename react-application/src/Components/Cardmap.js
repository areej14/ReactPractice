import React, { useEffect, useState } from 'react'
import "../App.css"
import Button from './Button'
import Loader from './Loader'
import Details from './Details'



const Cardmap = () => {
    const [input, setinput] = useState([])
    const [data, setdata] = useState([])


    async function Api() {
        try {
            let url = await fetch("https://course-api.com/react-tabs-project");
            let input = await url.json();
            setinput(input)
            setdata(input)

        } catch (error) {
            alert("Error: " + error.message)
        }



    }
    


    function show(choice) {
        console.log("ini list", input);

        console.log(choice);
        const filter = data.filter((item) => item.id === choice)
        setinput(filter)
        console.log("final list", filter)
    }


    useEffect(() => {
        Api()

    }, [])
    return (
        <>
            {(input.length !== 0) ?

                <div className="body">
                    <h2 style={{ color: "grey" }}>Choose Any Company</h2>
                    <Button set={data} fun={show} />

                    <Details data={input} />

                </div>

                : <Loader fun={Api} />}
        </>
    )
}

export default Cardmap
