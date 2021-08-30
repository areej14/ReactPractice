import React from 'react'

function Child({value}) {
    return (
        <div class="my-5" style={{"border":"2px solid grey", "width":"30%","margin":"0 auto", "borderRadius":"25px"}}>
            <h2>{value}</h2>
        </div>
    )
}

export default Child
