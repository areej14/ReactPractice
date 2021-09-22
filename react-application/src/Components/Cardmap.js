import React, { useEffect, useState } from 'react'
import "../App.css"
import Loader from './Loader'
import Details from './Details'



const Cardmap = () => {
    const [input, setinput] = useState([])
    const [data, setdata] = useState([])


    async function Api() {
        try {
            let url = await fetch("https://api.github.com/users");
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
                   
                    {input.map((item, i) => <div >
        <div className="offcanvas-header" key={i}>
          <h5 id="offcanvasTopLabel">Name: {item.id}<br />{item.login}<br /></h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body">

        </div>
      </div>)}

                </div>

                : <Loader fun={Api} />}
        </>
    )
}

export default Cardmap
