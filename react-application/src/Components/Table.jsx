import React, { useEffect, useState } from 'react';


const Table = () => {
  const [getApi, setgetApi] = useState([]);
  const [dfilter, setfilter] = useState([]);
  const [delid, setDelid] = useState({ id: '' });
  const [searchId, setSearchid] = useState({ id: '' });
  //Add new Record fields
  const [newRec, setnewRecord] = useState({ id: '', cuntry_name: '', unit_name: '', unit_sign: '', unit_titlecode: '', autodatetime: '' })
  //Edit Record fields
  const [editModal, seteditModal] = useState({ currency_units_id: '', cuntry_name: '', unit_name: '', unit_sign: '', unit_titlecode: '', autodatetime: '' })

  //POST Method
  const AddRecord = () => {
    const{cuntry_name, unit_name}=newRec;
    if(cuntry_name =='' ||unit_name ==''){
      alert("Enter values");
    }
    else{
    fetch(`https://countydevapiaws.genial365.com:443/api/currency_units`, {
      headers: {
        'Content-Type': 'application/json',
      }, method: 'POST', body: JSON.stringify(newRec)
    })
      .then((response) => response.json())
      .then(() => {
        fetchAlldata()
        setnewRecord({ cuntry_name: '', unit_name: '' })
      })

    }
  }

  // GET Api method
  const fetchAlldata = () => {

    fetch(`https://countydevapiaws.genial365.com:443/api/currency_units`, { method: 'GET' })
      .then((response) => response.json())
      .then((actualData) => {
        setgetApi(actualData);
        setfilter(actualData)
      });
  }
  //Handling Input Fiels of Add new record
  const Add = (e) => {
    e.preventDefault();
    setnewRecord((preVal) => {
      console.log(preVal);
      const { name, value } = e.target;

      return {
        ...preVal,
        [name]: value
      }
    });
  }
  //getting id of data to be deleted
  const Delid = (id) => {
    setDelid({ id: id })
  }

  //Edit method (PUT)

  const EditApi = async () => {
    const { currency_units_id } = editModal
    await fetch(`https://countydevapiaws.genial365.com:443/api/currency_units/${currency_units_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      }, body: JSON.stringify(editModal),
    }).then((response) => response).then((getdd) => {
      fetchAlldata()
    })

  }

  //Search
  const Search = async (e) => {
    setSearchid({ id: e.target.value })
    console.log(dfilter, e.target.value);
    let a = dfilter.filter((item) => item.currency_units_id == e.target.value);
    ((e.target.value === '') || (a.length === 0)) ? setgetApi(dfilter) : setgetApi(a);


  }

  //DELETE Data
  const onDelete = async () => {
    let id = delid.id;
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
                  <label htmlFor="recipient-name" >Enter Bank Name:</label>
                  <input type="text" className="form-control" onChange={Add} name="cuntry_name" id="recipient-name" value={newRec.cuntry_name} />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" >Enter Branch City:</label>
                  <input type="text" onChange={Add} className="form-control" id="recipient-city" value={newRec.unit_name} name="unit_name" />
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
        <div style={{ float: 'right' }}><label className="align-right" >  Search: </label><input type="text" name="id" value={searchId.id} onChange={Search} /></div>
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
          {/* getting API data in table  using map */}
          {getApi ? getApi.map((data, id) => {
            return (<tr key={id}>
              <td>{data.currency_units_id}</td>
              <td>{data.cuntry_name}</td>
              <td>{data.unit_name}</td>
              <td>
                {/* Delete button */}
                <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <i data-bs-toggle="modal" data-bs-target="#exampleModal" className="fa fa-trash-o btn " style={{ color: 'red' }} onClick={() => Delid(data.currency_units_id)} >
                  </i>
                </button>
                {/* Delete modal */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        Are you sure you want to delete the record?
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={() => onDelete()}>Yes</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Edit button */}
                <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal1">
                  <i className="fa fa-pencil-square-o btn" style={{ color: '#4E69F0' }}
                    onClick={() => {
                      seteditModal({
                        currency_units_id: data.currency_units_id,
                        cuntry_name: data.cuntry_name,
                        unit_name: data.unit_name,



                      }
                      )
                    }}
                  >
                  </i>
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
                            <label htmlFor="recipient-name" >Enter Bank Name:</label>
                            <input type="text" className="form-control" name="cuntry_name" id="recipient-name" value={editModal.cuntry_name} onChange={((e) => {
                              seteditModal(
                                {
                                  ...editModal,
                                  cuntry_name: e.target.value
                                }
                              )


                            })} />


                          </div>
                          <div className="mb-3">
                            <label htmlFor="message-text" >Enter Branch City:</label>


                            <input type="text" className="form-control" id="recipient-city" name="unit_name" value={editModal.unit_name} onChange={((e) => {
                              seteditModal(
                                {
                                  ...editModal,
                                  unit_name: e.target.value
                                }
                              )


                            })} />
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={() => {
                          EditApi()

                        }}>Yes</button>
                      </div>
                    </div>
                  </div>
                </div>

              </td>
            </tr>)
          }) : <div>Data not found</div>}

        </tbody>

      </table></>

  )
}

export default Table