import React from 'react'
function Details({ data }) {

  return (
    
    <div className=" col-md-6" >
    <div style={{ fontFamily: "cursive" }}>


<div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={data.avatar_url} style={{height: "240px"}}className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Name: {data.login}</h5>
       <h5>{data.type}</h5>
      <p>Hi... I am a github User</p>
        <a href={data.repos_url} target="_blank"><button className="btn btn-outline-primary mx-2">Repositories</button></a>
        <a href={data.html_url} target="_blank"><button className="btn btn-outline-primary"> Github Account</button></a>
     </div>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Details
