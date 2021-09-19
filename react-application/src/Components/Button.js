import React from 'react'

function Button({ set, fun }) {
    console.log("btn cmp", set);
    return (
        <div style={{ textAlign: "center", margin: "10%" }}>
            {set.map((btns, i) =>
                <button className="btn btn-outline-warning mx-3 my-2 " type="button" data-bs-toggle="offcanvas" key={i} data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" onClick={() => fun(btns)} >{btns}</button>
            )}
        </div>
    )
}

export default Button
