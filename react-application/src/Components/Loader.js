import React from 'react'

function Loader(props) {
    return (

        <div className="text-center">

            <div className="spinner-grow my-3" style={{ width: "6rem", height: "6rem", color: "green" }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div><br /><br />
            <button className="btn btn-success" onClick={() => props.fun()} type="button" >Refresh</button><br />
        </div>



    )
}

export default Loader
