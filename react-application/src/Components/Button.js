import React from 'react'

function Button({data}) {
    console.log(data);
    
    return (
        <div>
            

<div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasTopLabel">{data.company}<br/>{data.dates}<br/>{data.title}<br/>{data.duties}</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    ...
  </div>
</div>
        </div>
    )
}

export default Button
