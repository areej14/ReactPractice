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
        <div className="container my-2" style={{ textAlign: 'center' }}>
            <h2 > <i class="fas fa-tasks">My Todo App</i></h2>
            <input style={{backgroundColor: 'rgb(170, 170, 223)'}} type="text" onChange={TextOnChange} placeholder="--Enter here--" value={text} />
            <button className="btn btn-success  mx-2" onClick={() => additem()}><i class="fas fa-plus-square"></i></button>
            <button className="btn btn-danger  mx-2" onClick={()=>setlist([ ])}><i class="fas fa-trash-alt"></i></button><br />
            {list.map((todo, i) => <div key={i}>
                <li>{todo.task}
                <button className="btn btn-warning mx-2 my-1" onClick={() => delitem(todo.task)} ><i class="fas fa-minus-square"></i></button>
                </li>
            </div>)}


        </div>
    )
}
