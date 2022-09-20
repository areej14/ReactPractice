import React, { useEffect, useState } from 'react';


const Table = () => {
  const [getApi, setgetApi] = useState([]);
  const [dfilter, setfilter] = useState([]);
  const [delid, setDelid] = useState({ name: '' });
  const [searchId, setSearchid] = useState({ id: '' });
  // getting date and time
  const d = new Date();
  let month = d.getUTCMonth() + 1
  let date = d.getUTCFullYear() + "-" + month + "-" + d.getUTCDate();
  var hours = d.getHours();
  hours = (hours % 12) || 12;
  let time = hours + ":" + d.getMinutes();
  let autoT = date + "  " + time;
  // const s = '01-01-1970 00:03:44';
 // const  autoT = new Date(s);

  // Add new Record fields
  const [newRec, setnewRecord] = useState({ id: '', cuntry_name: '', unit_name: '', unit_sign: '', unit_titlecode: '', autodatetime: '' })
  //Edit Record fields
  const [editModal, seteditModal] = useState({ currency_units_id: '', cuntry_name: '', unit_name: '', unit_sign: '', unit_titlecode: '', autodatetime: '' })

  //POST Method


  const AddRecord = () => {

    console.log(newRec);
    const { cuntry_name, unit_name } = newRec;
    if (cuntry_name == '' || unit_name == '') {
      alert("Enter values");
    }
    else {
      fetch(`https://countydevapiaws.genial365.com:443/api/currency_units`, {
        headers: {
          'Content-Type': 'application/json',
        }, method: 'POST', body: JSON.stringify(newRec)
      })
        .then((response) => response.json())
        .then(() => {
          fetchAlldata()
          setnewRecord({ cuntry_name: '', unit_name: '', autodatetime: '' })
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
    // updateTime()
    setnewRecord((preVal) => {
      const { name, value } = e.target;

      return {
        ...preVal,
        [name]: value,
        autodatetime: autoT,

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
    setSearchid({ name: e.target.value })
    // var a = dfilter.includes(e.target.value);
    setgetApi(dfilter.filter((item) => (item.cuntry_name.toLowerCase().includes(e.target.value.toLowerCase()))));
    // console.log(a);
    // let a = dfilter.filter((item) => item.currency_units_id == e.target.value);
    // ((e.target.value === '') || (a.length === 0)) ? setgetApi(dfilter) : setgetApi(a);


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
    <div className="alert alert-primary d-flex align-items-center" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
  <div>
    An example alert with an icon
  </div>
</div>
      {/* Add new record modal    */}
      <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
              <h5 className="modal-title" id="#exampleModal3">Enter new Record</h5>
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
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3" onClick={Add}><i className="fa fa-plus"></i> Add new record</button>
        <div style={{ float: 'right' }}><label className="align-right" >  Search: </label><input type="text" name="id" value={searchId.name} onChange={Search} placeholder=" -- by Country name--" /></div>
        <br /><br />
      </div>
      <table className="table table-striped">
        <thead>
          <tr >
            {/* Table Header */}
            <th scope="col">Sr.</th>
            <th scope="col">Country Name</th>
            <th scope="col">Unit Name</th>
            <th scope="col">Action</th>
            <th scope="col">Add/Edit time</th>
            <th scope="col">Unit sign</th>
          </tr>
        </thead>
        <tbody>
          {/* getting API data in table  using map */}
          {getApi ? getApi.map((data, id) => {
            return (<tr key={id}>
              <td>{id+1}</td>
              <td>{data.cuntry_name}</td>
              <td>{data.unit_name}</td>
              <td >
                {/* Delete button */}
                <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <i data-bs-toggle="modal" data-bs-target="#exampleModal" className="fa fa-trash-o " style={{ color: 'red' }} onClick={() => Delid(data.currency_units_id)} >
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
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => onDelete()}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Edit button */}
                <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal1"><i className="fa fa-pencil-square-o " style={{ color: '#4E69F0' }}
                  onClick={() => {
                    seteditModal({
                      currency_units_id: data.currency_units_id,
                      cuntry_name: data.cuntry_name,
                      unit_name: data.unit_name,
                      autodatetime: autoT,
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
                        <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={() => {
                          EditApi()

                        }}>Edit</button>
                      </div>
                    </div>
                  </div>
                </div>

              </td>
              <td>{data.autodatetime}</td>
            </tr>)
          }) : <div>Data not found</div>}

        </tbody>

      </table></>

  )
}

export default Table