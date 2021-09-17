import React ,{useEffect,useState} from 'react'

import "../App.css"
import Card from './Card'


const Cardmap = () => {
    const [state, setstate] = useState([])
    async function Api() {
        try {
            let url="https://course-api.com/react-tours-project";
            let data = await fetch(url)
            console.log(url);
            let json= await data.json();
            setstate(json)
            
        } catch (error) {
            alert("Error: " + error.message)
        }

    }
    useEffect(() => {
        Api()
        
    }, [])
    return (
        <div className="container">
            <h2>Tour List</h2>
            {state.map((item,i) =><Card title={item.name} price={item.price} src={item.image} content={item.info}  key={i}/>)}
        </div>
    )
}

export default Cardmap
