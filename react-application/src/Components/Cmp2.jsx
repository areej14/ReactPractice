import React from 'react'

function Cmp2(props) {
    return (
        <div style={{backgroundColor:'green'}}>
             <h3>Componnet 2</h3>
            <props.data />
        </div>
    )
}

export default Cmp2
