import React from 'react'

function Loader(props) {
    return (

        <div className="text-center">

            <div className="spinner-border my-3" style={{ width: "6rem", height: "6rem", color: "grey" }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div ><br />
           
        </div>



    )
}

export default Loader
