import React, {useState} from 'react'

const CreateNote = () => {
    const [note, setnote]=useState({
        title:"",
    des:""});
    const [List, setList]=useState([]);
    const delNote=(delindex)=>{
        // setList(List.filter((del) => (delindex !== del.i)))
        console.log(List.filter((del) => (delindex !== del.i)));
        console.log(delindex);

    }
    const writeNote=(e)=>{
        setnote((preVal)=>{
            
            const {name,value}=e.target;
       return{
           ...preVal,
            [name]: value
       }
        });
        
    }
    const keepNote=()=>{ 
        setList((preVal)=>{
            return[ ...preVal,note];
            }); 
            setnote({title:'', des:''})
        console.log(List)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    
  return (
    
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="--Write title--" name="title" onChange={writeNote} value={note.title}/>
            <input type="text" placeholder="--Write note--" name="des" onChange={writeNote} value={note.des}/>
            <button onClick={keepNote}>➕</button>
                    </form>
                    <div>
                    {List.map((data,i)=><div key={i}><li >{i+1}  {data.title}
                    </li><li>{data.des}</li>
                    <button onClick={delNote(i+1)}>❌</button>
                    </div>
                    )}
                    </div>
    </div>
  )
}

export default CreateNote