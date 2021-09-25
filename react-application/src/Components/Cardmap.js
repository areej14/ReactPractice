import React, { useEffect, useState } from 'react'
import "../App.css"
import Details from './Details'
import Loader from './Loader'


const Cardmap = () => {
    const [input, setinput] = useState([])
    const [data, setdata] = useState([])
    const [value, setvalue] = useState()
    const [name, setname] = useState()




   
    async function Apifetch() {
        try {
            let Api = "https://api.github.com/users";
            let url = await fetch((Api))
            let parsedData = await url.json();
            setinput(parsedData)
            setdata(parsedData)

        } catch (error) {
            alert("Error: " + error.message)
        }



    }

    const Check = (e) => {
        setvalue(e.target.value)
        setinput(data.filter((item) => (item.login.toLowerCase().includes(e.target.value.toLowerCase()))));
    }
    async function User(e) {

        setname(e.target.value)
        const url = await fetch((`https://api.github.com/users/${e.target.value}`))
        let parsedData = await url.json();
        ((e.target.value === '') || (parsedData.message === 'Not Found')) ? setinput(data) :
            setinput([parsedData])



    }
    useEffect(() => {
        Apifetch();

    }, [])

    return (
        <>

  
            <div style={{ textAlign: 'center' }}>
                <h2>Search Github Users <i className="fas fa-users"></i></h2>

                <input value={value} className="my-2" onChange={Check} type="text" placeholder="--Search from List--" /> <i className="fas fa-search"></i><br />
                <input value={name} onChange={User}  type="text" placeholder="--Search Other Users--" /> <i className="fas fa-search"></i> <br /><br />

                <div className="row" >

                    {input.map((item, i) => <Details data={item} key={i} />)}

                </div>
            </div>
        


        </>
    )
}

export default Cardmap
