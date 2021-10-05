import React from 'react'

function Cmp1(props) {
    return (
        <div style={{backgroundColor:'teal'}}>
            <h3>Componnet 1</h3>
            <props.data />
        </div>
    )
}

export default Cmp1
