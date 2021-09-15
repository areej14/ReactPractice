import React from 'react'

function Task({todo,i,edit,del}) {
    
    return (
        <div>
            <h4>
               
              
                {JSON.parse(localStorage.getItem(i+1))} 
                     <button className="btn btn-outline-warning ml-5 mx-1 my-1" type="button" onClick={() => del(i + 1)} > <i className="fas fa-times"></i></button>
                    <button className="btn btn-outline-light mx-1 my-1" type="button" onClick={() => edit(todo.task, i + 1)} ><i className="fas fa-pen"></i></button>
                </h4>
                
               
                   
        </div>
    )
}

export default Task
