import React from 'react'
function Details({ data }) {

  return (
    <div style={{ fontFamily: "cursive" }}>


<div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={data.avatar_url} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Name: {data.login}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        <a href={data.repos_url} target="_blank"><button className="btn btn-primary">Search Repositories</button></a>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Details
