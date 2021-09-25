import React, { useEffect, useState } from 'react'
import "../App.css"
import Details from './Details'
import Loader from './Loader'

const Cardmap = () => {
    const [input, setinput] = useState([])
    const [data, setdata] = useState([])
    const [value, setvalue] = useState('')
    const [name, setname] = useState('')
   
    


    const headers = { AUTHORIZATION: "Token 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" }
    async function Api() {
        try {
            let Api = "https://api.github.com/users";
            let url = await fetch((Api) , { "method": "GET", "headers": headers })
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
        const url = await fetch((`https://api.github.com/users/${name}`), { "method": "GET", "headers": headers })
        let parsedData = await url.json();
        try{
        e.target.value===''?setinput(data):
        setinput([parsedData])
      }
      catch (error) {
          alert('Error',error.message)
      }
        

    }
    useEffect(() => {
        Api()

    }, [])

    return (
        <>
            

               <div style={{textAlign:'center' }}>
                   <h2>Search Github Users <i class="fas fa-users"></i></h2>
                   
                  <input value={value} className="my-2"onChange={(value) => Check(value)} type="text" placeholder="Search from List"/> <i className="fas fa-search"></i><br/>
                  <input value={name} onChange={(name) => User(name)} type="text" placeholder="Search Other Users"/> <i className="fas fa-search"></i> <br/><br/>



                   
                    <div className="row" >
                   
                    { input.map((item, i) => <Details data={item} key={i}  />)}
               
                </div>
                </div>
               

        </>
    )
}

export default Cardmap
