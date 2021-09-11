import React,{useState}from 'react'

export default function Todo() {
    const [list, setlist] = useState([])
    const [text, settext] = useState('')
    const TextOnChange=(e)=>{
        settext(e.target.value)
    }
    const additem=()=>{
       
     setlist([...list,{task:text,id:list.length} ])
     console.log(list);
     settext('')
    }
    const delitem=(index,id)=>{
        console.log(index,id);
        console.log("check",list[index].id);
       const arr=list.filter(()=>(index !== list[index].id))
       console.log("filtered Array id",arr)
       
       }
    return (
        <div className="container" style={{textalign: 'center'}}>
            <h2>Todo App</h2> 
            <input type="text" onChange={TextOnChange} placeholder="Enter here" value={text} />
            <button className="btn btn-primary  mx-2" onClick={()=> additem()}>ADD</button><br/>
           { list.map((todo,i)=><div key={i}>
               <li>{todo.task}</li>
               <button className="btn btn-danger" onClick={()=> delitem(i,todo.id)} >Del</button>
               </div> )}
        </div>
    )
}
