import React, { useState } from 'react'
import Task from './Task'

export default function Todo() {

    const [list, setlist] = useState([])
    const [text, settext] = useState('')

    const TextOnChange = (e) => {
        settext(e.target.value)
    }

    const additem = () => {
        setlist([...list, { task: text, id: null }])
        //  list.map((store,i)=>{localStorage.setItem(i+1, JSON.stringify(store));})
         settext('')
    }

    const delAll = () => {
        setlist([])
        // localStorage.clear();
    }

    const delitem = (delindex) => {
        setlist(list.filter((del) => (delindex !== del.id)))
        // localStorage.removeItem(delindex)
    }

    const edititem = (value, index) => {
        const updated = prompt("edit this task", value)
      

        list.map((editlist) => {
            if (index === editlist.id) {
                editlist.task = updated;
               }})
            // localStorage.setItem(index, JSON.stringify(updated))

        setlist([...list])
    }

    return (
        <div className="container my-2" >

            <h2 style={{ textAlign: 'center' }} > <i className="fas fa-tasks"> My Todo App</i></h2>
            <div className="input-group" style={{ textAlign: 'center', width: '70%', margin: '0 auto' }}>
                <input style={{ backgroundColor: 'rgb(170, 170, 223)' }} type="text" onChange={TextOnChange} className="form-control" value={text} placeholder="Enter Your Task"  />
                <button className="btn btn-outline-success mx-1" type="button" onClick={() => additem()}><i className="fas fa-plus-square"></i></button>
                <button className="btn btn-outline-danger" type="button" onClick={() => delAll()}><i className="fas fa-trash-alt"></i></button>
            </div>

            {list.map((data, index) => <div style={{ marginLeft: '18%', marginTop: '14px' }} key={index}>
                <Task todo={data} i={index} edit={edititem} del={ delitem}/>
            </div>)}

        </div>
    )
}