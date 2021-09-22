import React from 'react'
import List from './List'
function Details({ data }) {
console.log(data);
  return (
    <div style={{ fontFamily: "cursive" }}>


      {data.map((item, i) => <div >
        <div className="offcanvas-header" key={i}>
          <h5 id="offcanvasTopLabel">Name: {item.id}<br />{item.login}<br /><List data={item.id} /></h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body">

        </div>
      </div>)}
    </div>
  )
}

export default Details
