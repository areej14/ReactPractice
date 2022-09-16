import React, { useEffect, useState } from 'react';

const Table = () => {
  const [getApi, setGetApi] = useState();
  //Add Record fields
  const [updateApi, setUpdate] = useState({ id: '', cuntry_name: '', unit_name: '' })
  //POST Method
  const AddRecord = () => {
    fetch(`https://countydevapiaws.genial365.com:443/api/currency_units`, {
      headers: {
        'Content-Type': 'application/json',
      }, method: 'POST', body: JSON.stringify(updateApi)
    })
      .then((response) => response.json())
      .then((actualData) => {
        fetchAlldata()
        setUpdate({ cuntry_name: '', unit_name: '' })
      })


  }

  // GET Api method
  const fetchAlldata = () => {

    fetch(`https://countydevapiaws.genial365.com:443/api/currency_units`, { method: 'GET' })
      .then((response) => response.json())
      .then((actualData) => setGetApi(actualData));
  }
  //Handling Input Fiels of Add new record
  const Add = (e) => {
    e.preventDefault();
    setUpdate((preVal) => {
      console.log(preVal);
      const { name, value } = e.target;

      return {
        ...preVal,
        [name]: value
      }
    });




  }
  const Edit= ()=>{
    
  }
  const edithandle=()=>{
    
  }
  //DELETE Data
  const onDelete = async (id) => {
    const res = await fetch(`https://countydevapiaws.genial365.com:443/api/currency_units/${id}`, { method: 'DELETE' })
    await res.json();
    fetchAlldata()

  }
  //UseEffect to call GetApi method
  useEffect(() => {
    fetchAlldata()
  }, []);
  return (
    <>
      {/* Add new record modal    */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Enter new Record</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-2">
                  <label for="recipient-name" >Enter Bank Name:</label>
                  <input type="text" className="form-control" onChange={Add} name="cuntry_name" id="recipient-name" value={updateApi.cuntry_name} />
                </div>
                <div className="mb-3">
                  <label for="message-text" >Enter Branch City:</label>
                  <input type="text" onChange={Add} className="form-control" id="recipient-city" value={updateApi.unit_name} name="unit_name" />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={AddRecord}>Submit</button>
            </div>
          </div>
        </div>
      </div>


      <div className="mx-2" style={{ textAlign: 'left' }}> <h4 >Bank names</h4>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={Add}><i className="fa fa-plus"></i> Add new record</button>
        <br /><br />
      </div>
      <table className="table table-striped ">
        <thead>
          <tr>
            {/* Table Header */}
            <th scope="col">Sr.</th>
            <th scope="col">Bank Name</th>
            <th scope="col">Branch City</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {getApi?.map((data, id) => {
            {/* getting API data in table  using map */ }
            return (<tr key={id}>
              <td>{id + 1}</td>
              <td>{data.cuntry_name}</td>
              <td>{data.unit_name}</td>
              <td>
                {/* Delete button */}
                <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <i data-bs-toggle="modal" data-bs-target="#exampleModal" className="fa fa-trash-o btn " style={{ color: 'red' }}  onClick={() => onDelete(data.currency_units_id)} >
                  </i>
                </button>
                {/* Delete modal */}
                {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        Are you sure you want to delete the record?
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={() => onDelete(data.currency_units_id)}>Yes</button>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* Edit button */}
                <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal1">
                  <i className="fa fa-pencil-square-o btn" style={{ color: '#4E69F0' }} onClick={()=>Edit(data.cuntry_name,data.unit_name)}>  </i>
                </button>
                 {/* Edit Modal */}
                <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-2">
                            <label for="recipient-name" >Enter Bank Name:</label>
                            <input type="text" className="form-control" name="cuntry_name" id="recipient-name"  />


                          </div>
                          <div className="mb-3">
                            <label for="message-text" >Enter Branch City:</label>


                            <input type="text" className="form-control" id="recipient-city" onChange={(e)=>edithandle()} />
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal" >Yes</button>
                      </div>
                    </div>
                  </div>
                </div>

              </td>
            </tr>)
          })}

        </tbody>

      </table></>

  )
}

export default Table