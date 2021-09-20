import React from 'react'

function Button({ set, fun }) {
    console.log("btn cmp", set);
    return (
        <div style={{ textAlign: "center", margin: "10%" }}>
            {set.map((data, i) =>
                <button className="btn btn-outline-warning mx-3 my-2 " type="button" data-bs-toggle="offcanvas" key={i} data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" onClick={() => fun(data.id)} >{data.company}</button>
            )}
        </div>
    )
}

export default Button
