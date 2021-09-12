import React, { useState } from 'react'
export default function Todo() {
    const [list, setlist] = useState([])
    const [text, settext] = useState('')
    const TextOnChange = (e) => {

        settext(e.target.value)

    }
    const additem = () => {

        setlist([...list, {task:text ,id:''} ])
        localStorage.setItem('items', JSON.stringify(list));
        console.log(list);
        settext('')


    }
    const delAll = () => {
        setlist([])
        localStorage.clear();
    }
    const delitem = (deltask) => {

        setlist(list.filter((todoo) => (deltask !== todoo.id)))
         }
    
         const edititem = (edit,index)=> {
          const task= prompt("edit this task",edit)
        //   console.log(edit,task);
         const newlist=list.map(editlist=>{ if(index===editlist.id)
            {
             editlist.task = task
             console.log(index,editlist.task,editlist.id)
         }
        
         })
         setlist(newlist)
        
        
        }
    
    return (
        <div  className="container my-2" >

            <h2 style={{ textAlign: 'center' }} > <i className="fas fa-tasks"> My Todo App</i></h2>
            <div className="input-group" style={{ textAlign: 'center', width: '70%', margin: '0 auto' }}>
                <input style={{ backgroundColor: 'rgb(170, 170, 223)' }} type="text" onChange={TextOnChange} className="form-control" value={text} placeholder="Enter Your Task" aria-label="Recipient's username with two button addons" />
                <button className="btn btn-outline-success" type="button" onClick={() => additem()}><i className="fas fa-plus-square"></i></button>
                <button className="btn btn-outline-danger" type="button" onClick={() => delAll()}><i className="fas fa-trash-alt"></i></button>
            </div>

            {list.map((todo, i) => <div style={{ marginLeft: '16%', marginTop: '10px' }} key={i}>
                <h3>{todo.id=i+1} {todo.task}
                <button className="btn btn-info mx-2 my-1" onClick={() => delitem(i+1)} ><i className="fas fa-minus-square"></i></button> 
                   
                    <button className="btn btn-info mx-2 my-1" onClick={() => edititem(todo.task,i+1)} ><i className="fas fa-link"></i></button>
                </h3>
            </div>)}

        </div>
    )
    }