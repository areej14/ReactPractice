import React from 'react'
import List from './List'
function Details({ data }) {

  return (
    <div style={{ fontFamily: "cursive" }}>


      {data.map((item, i) => <div className="offcanvas offcanvas-right " tabIndex="-3" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-header" key={i}>
          <h5 id="offcanvasTopLabel">Name: {item.company}<br />{item.dates}<br />{item.title}<br /><List data={item.duties} /></h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body">

        </div>
      </div>)}
    </div>
  )
}

export default Details
