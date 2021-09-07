import React, { useState } from 'react'

export default function Accordion() {
    const [click1, setclick1] = useState(false)
    
    return (
        <div className="container" style={{textAlign: 'center'}}>
           
           <button className="btn btn-primary btn-block" onClick={() => setclick1(!click1)}>{click1 ? <i className="fas fa-arrow-up"> Read </i> : <i className="fas fa-arrow-down"> Read </i>}</button>

           <div style={{padding:'25px'}}> {click1 && (`Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters.`)}

</div>

        </div>
    )
}
