import React, { useEffect, useState } from 'react'
import "../App.css"
import Details from './Details'
import Loader from './Loader'

const Cardmap = () => {
    const [input, setinput] = useState([])
    const [data, setdata] = useState([])
    const [value, setvalue] = useState('')
    const [name, setname] = useState('')
    // const [flag, setflag] = useState(false)
    


    const headers = { AUTHORIZATION: "Token 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" }
    async function Api() {
        try {
            let Api = "https://api.github.com/users";
            let url = await fetch((Api) , { "method": "GET", "headers": headers })
            let parsedData = await url.json();
            setinput(parsedData)
            setdata(parsedData)
            // setflag(true)

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
        const url = await fetch((`https://api.github.com/users/${name}`), { "method": "GET", "headers": headers })
        let parsedData = await url.json();
        console.log(name.trim().length);
        name.trim().length===0?setinput(data):
        setinput([parsedData])
        

    }
    useEffect(() => {
        Api()

    }, [])

    return (
        <>
            

               <div style={{textAlign:'center' ,backgroundColor:'grey'}}>
                   <h2>Search</h2>
                    <input value={value} className="mx-3 my-2"onChange={(value) => Check(value)} type="text" placeholder="Search from List"/> 
                    <input value={name} onChange={(name) => User(name)} type="text" placeholder="Search Other Accounts" /><br/><br/>



                   
                    <div className="row" >
                   
                    { input.map((item, i) => <Details data={item} key={i}  />)}
               
                </div>
                </div>
               

        </>
    )
}

export default Cardmap
