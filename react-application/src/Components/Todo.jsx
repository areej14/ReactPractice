import React, { useState } from 'react'
export default function Todo() {
    const [list, setlist] = useState([])
    const [text, settext] = useState('')
    const TextOnChange = (e) => {
        settext(e.target.value)
    }
    const additem = () => {

        setlist([...list, { task: text }])
        console.log(list);
        settext('')
    }
    const delitem = (deltask) => {

        setlist(list.filter((todoo) => (deltask !== todoo.task)))


    }
    return (
        <div className="container" style={{ textAlign: 'center' }}>
            <h2 >Todo App</h2>
            <input type="text" onChange={TextOnChange} placeholder="--Enter here--" value={text} />
            <button className="btn btn-primary  mx-2" onClick={() => additem()}>ADD</button><br />
            {list.map((todo, i) => <div key={i}>
                <li>{todo.task}<button className="btn btn-danger mx-2 my-5" onClick={() => delitem(todo.task)} >Del</button></li>
            </div>)}
            {/* ///////////////// */}
            
        </div>
    )
}
