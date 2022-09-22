import React, { useEffect, useState } from 'react';
import Moment from 'moment';

const Table = () => {
  const [getApi, setgetApi] = useState([]);
  const [dfilter, setfilter] = useState([]);
  const [delid, setDelid] = useState({ name: '' });
  const [searchId, setSearchid] = useState({ id: '' });
  const [flags, setFlags] = useState({ addflag: false, editflag: false, df: false });
  // getting date and time
 
 
  const d = new Date();
  let month = d.getUTCMonth() + 1
  let date = d.getUTCFullYear()  + "-" + month + "-" +  d.getUTCDate();
  let time =d.getHours()+ ":" + d.getMinutes();
  let autoT = date + "  " + time;
 
 

 
  // Add new Record fields
  const [newRec, setnewRecord] = useState({ id: '', cuntry_name: '', unit_name: '', unit_sign: '', autodatetime: '' })
  //Edit Record fields
  const [editModal, seteditModal] = useState({ currency_units_id: '', cuntry_name: '', unit_name: '', unit_sign: '',  autodatetime:'' })

  //POST Method


  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setFlags({ addflag: false, df: false, editflag: false })
    }, 2000)

    return () => {
      clearTimeout(timeId)
    }
  }, [flags]);





  const AddRecord = () => {
    const { cuntry_name, unit_name,unit_sign } = newRec;
    // console.log(autodatetime);
    if (cuntry_name == '' || unit_name == ''|| unit_sign=='') {

      alert("Enter values");
    }
    else {
      setFlags({ addflag: true })

      fetch(`https://countydevapiaws.genial365.com:443/api/currency_units`, {
        headers: {
          'Content-Type': 'application/json',
        }, method: 'POST', body: JSON.stringify(newRec)
      })
        .then((response) => response.json())
        .then(() => {
          fetchAlldata()
          setnewRecord({ cuntry_name: '', unit_name: '',unit_sign:'' })
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
    }).then((response) => response).then(() => {
      fetchAlldata()
    })
    setFlags({ editflag: true })


  }

  //Search
  const Search = async (e) => {
    setSearchid({ name: e.target.value })
    setgetApi(dfilter.filter((item) => (item.cuntry_name.toLowerCase().includes(e.target.value.toLowerCase()))));

  }

  //DELETE Data
  const onDelete = async () => {
    setFlags({ df: true })
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
    {/* alert */}
      {(flags.addflag) || (flags.df) || (flags.editflag) ? <div className="d-flex fixed-top align-items-center justify-content-center">
        <div className="alert my-1 alert-primary d-flex align-items-center "  role="alert" style={{ width: '25%' }}>

          <div >
            {(flags.addflag) ? <h6>Record added</h6> : (flags.df) ? <h6 >Record deleted</h6> : (flags.editflag) ? <h6>Record edited</h6> : null}
          </div>
        </div>
      </div> : null}
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
                <div className="mb-1">
                  <label htmlFor="recipient-name" >Country Name:</label>
                  <input type="text" className="form-control" onChange={Add} name="cuntry_name" id="recipient-name" value={newRec.cuntry_name} />
               
                  <label htmlFor="message-text" >Unit Name:</label>
                  <input type="text" onChange={Add} className="form-control" id="recipient-city" value={newRec.unit_name} name="unit_name" />
                
                  <label htmlFor="message-text" >Unit Sign:</label>
                  <input type="text" onChange={Add} className="form-control" id="recipient-city" value={newRec.unit_sign} name="unit_sign" />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success"  data-bs-dismiss="modal" onClick={AddRecord}>ADD</button>
            </div>
          </div>
        </div>
      </div>


      <div className="mx-2" style={{ textAlign: 'left' }}> <h3 style={{ fontFamily: 'san-serif' }} >Currency Form</h3>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3" onClick={Add}><i className="fa fa-plus"></i> Add new record</button>
        <div style={{ float: 'right' }}><label className="align-right" > <b className="mx-2"> Search: </b> </label><input type="text" name="id" value={searchId.name} onChange={Search} placeholder=" -- by country name--" /></div>
        <br /><br />
      </div>
      <table className="table table-striped">
        <thead>
          <tr >
            {/* Table Header */}
            <th scope="col">Sr.</th>
            <th scope="col">Country Name</th>
            <th scope="col">Unit Name</th>
            <th scope="col">Unit Sign</th>
            <th scope="col">Add/Edit time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* getting API data in table  using map */}
          {getApi ? getApi.map((data, id) => {
            return (<tr key={id}>
              <td>{id + 1}</td>
              <td>{data.cuntry_name}</td>
              <td>{data.unit_name}</td>
              <td>{data.unit_sign}</td>
              <td>{ Moment(data.autodatetime).format('DD-MMM-YYYY , hh:mm A')}</td>
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
                      unit_sign: data.unit_sign,
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
                          <div className="mb-1">
                            <label htmlFor="recipient-name" >Country Name:</label>
                            <input type="text" className="form-control" name="cuntry_name" id="recipient-name" value={editModal.cuntry_name} onChange={((e) => {
                              seteditModal(
                                {
                                  ...editModal,
                                  cuntry_name: e.target.value
                                }
                              )


                            })} />


                          </div>
                          <div className="mb-1">
                            <label htmlFor="message-text" >Unit City:</label>


                            <input type="text" className="form-control" id="recipient-city" name="unit_name" value={editModal.unit_name} onChange={((e) => {
                              seteditModal(
                                {
                                  ...editModal,
                                  unit_name: e.target.value
                                }
                              )


                            })} />
                          </div>
                          <div className="mb-1">
                  <label htmlFor="message-text" >Unit Sign:</label>
                  <input type="text" className="form-control" id="recipient-city" value={editModal.unit_sign} name="unit_sign" onChange={((e) => {
                              seteditModal(
                                {
                                  ...editModal,
                                  unit_sign: e.target.value
                                }
                              )


                            })}/>
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

            </tr>)
          }) : <div>Data not found</div>}

        </tbody>

      </table></>

  )
}

export default Table