import React from 'react'

function Button({data,fun}) {
    return (
        <div>
            {data.map((btns,i)=><button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasTop"onClick={() =>fun(btns.company)} aria-controls="offcanvasTop">{btns.company}</button>)}
        </div>
    )
}

export default Button
