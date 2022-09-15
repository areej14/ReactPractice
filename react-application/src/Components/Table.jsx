import React, { useEffect, useState } from 'react';

const Table = () => {
    const [ApiData, setApidata] = useState();
    useEffect(() => {
        fetch(`https://countydevapiaws.genial365.com:443/api/currency_units`)
            .then((response) => response.json())
            .then((actualData) => setApidata(actualData));

    }, []);
    console.log(ApiData);
    return (
        <>
      
        <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">Sr.</th>
            <th scope="col">Bank Name</th>
            <th scope="col">Branch City</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {/* <tbody>
         {ApiData.map((data, id) => {
                return (<tr key={id}>
                <td>{id + 1}</td>
                    <td>{data.cuntry_name}</td>
                    <td>{data.unit_name}</td>
                    <td><i className="fa fa-pencil-square-o" style={{color:'#4E69F0'}}>  </i>  <i style={{color: 'red'}}className="fa fa-trash">  </i>  </td>
                    </tr>)
            })}
         
        </tbody> */}
      </table></>
       
    )
}

export default Table