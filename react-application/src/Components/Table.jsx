import React, { useEffect, useState } from 'react';

const Table = () => {
    const [getApi, setGetApi] = useState();
    const [update, setUpdate] = useState({id:'',cuntry_name:'',unit_name:''})
    
    useEffect(() => {
        fetch(`https://countydevapiaws.genial365.com:443/api/currency_units`,{method: 'GET'})
            .then((response) => response.json())
            .then((actualData) => setGetApi(actualData));

    }, []);
    const Add=(e)=>{
         console.log(getApi);
         setUpdate({id:'',cuntry_name:e.target.[value],});
           fetch(`https://countydevapiaws.genial365.com:443/api/currency_units`,{headers: {
            'Content-Type': 'application/json',
          },method: 'POST',body: JSON.stringify(request)})
               .then((response) => response.json())
              .then((actualData) =>console.log(actualData));
    
              // setGetApi(...getApi,actualData)
    //  console.log("getApi"+getApi.json);
    }

 
    return (
        <>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <form>
                                <div className="mb-2">
                                    <label for="recipient-name" >Enter Bank Name:</label>
                                    <input type="text" className="form-control" onChange={(e)=>Add()}name="cuntry_name" id="recipient-name" value={update.cuntry_name} />
                                </div>
                                <div className="mb-3">
                                    <label for="message-text" >Enter Branch City:</label>
                                    <input type="text" onChange={(e)=>Add()} className="form-control" id="recipient-city" value={update.unit_name} />
                                </div>
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mx-2" style={{ textAlign: 'left' }}> <h4 >Bank names</h4>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={Add}><i className="fa fa-plus"></i> Add new record</button><br /><br />
            </div>
        <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">Sr.</th>
            <th scope="col">Bank Name</th>
            <th scope="col">Branch City</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
         <tbody>
         {getApi?.map((data, id) => {
                return (<tr key={id}>
                <td>{id + 1}</td>
                    <td>{data.cuntry_name}</td>
                    <td>{data.unit_name}</td>
                    <td><i className="fa fa-pencil-square-o" style={{color:'#4E69F0'}}>  </i>  <i style={{color: 'red'}}className="fa fa-trash">  </i>  </td>
                    </tr>)})}
         
        </tbody> 

      </table></>
       
    )
}

export default Table