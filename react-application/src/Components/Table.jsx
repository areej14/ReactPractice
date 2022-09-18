import React, { useEffect, useState } from 'react';


const Table = () => {
  const [getApi, setgetApi] = useState();
  const [delid,setDelid]=useState({id:' '});
   //Add new Record fields
  const [newRec, setnewRecord] = useState({ id: '', cuntry_name: '', unit_name: '',unit_sign:'',unit_titlecode:'',autodatetime:''})
   //Edit Record fields
  const [editModal, seteditModal] = useState({ id: '', cuntry_name: '', unit_name: '',unit_sign:'',unit_titlecode:'',autodatetime:''})

  //POST Method
  const AddRecord = () => {
    fetch(`https://countydevapiaws.genial365.com:443/api/currency_units`, {
      headers: {
        'Content-Type': 'application/json',
      }, method: 'POST', body: JSON.stringify(newRec)
    })
      .then((response) => response.json())
      .then((actualData) => {
        fetchAlldata()
        setnewRecord({ cuntry_name: '', unit_name: '' })
      })


  }

  // GET Api method
  const fetchAlldata = () => {

    fetch(`https://countydevapiaws.genial365.com:443/api/currency_units`, { method: 'GET' })
      .then((response) => response.json())
      .then((actualData) => setgetApi(actualData));
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
const Delid=(id)=>{
  setDelid({id:id})
}
//confirming edit modal fields
  const Edit= (id,countryName,unitName)=>{
    seteditModal({id:id,cuntry_name:countryName,unit_name:unitName})
  }
  //Edit method (PUT)
  const EditApi= async ()=>{
  //   let id= editModal.id
  //   // from net 
  //   const requestOptions = {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' },
  //     body: JSON.stringify(editModal)
  // };
  // fetch(`https://countydevapiaws.genial365.com:443/api/currency_units/ ${id}`, requestOptions)
  //     .then(async response => {
  //         const isJson = response.headers.get('content-type')?.includes('application/json');
  //         const data = isJson && await response.json();
  
  //         // check for error response
  //         if (!response.ok) {
  //             // get error message from body or default to response status
  //             const error = (data && data.message) || response.status;
  //             return Promise.reject(error);
  //         }
  
  //         fetchAlldata()
  //     })
  //     .catch(error => {
  //       console.log(editModal);
  //        console.log( `Error: ${error}`);
  //         console.error('There was an error!', error);
  //     });
    // enddddddddddddd
    let i= editModal.id
    console.log("APIid",i);
   await fetch(`https://countydevapiaws.genial365.com:443/api/currency_units/${i}`, {Authorization: "Bearer 2XZ5dNYOWp_RDPDU2L47geoLAxscZmMqCpualslXF2c8py6ahnZBmJbK7KiOUECaRC9rM8e5BLfMyzEBWi-JEA4fhfZvJHkab-P7209pqfHJ6owTK99SBLQuUsL2v8geV2yIGreNpKu6mM_7IBfQA_91I5TrQ3oISJDOehDelzgcrVY6EZysWA8XEVru_YTq_2QErZxJU0C5GK_uPbI3wIFc5pwq8NWngPD53Y_JbOijat7zVEhKemocmS8pb4c01EAZycaFdQXsv8DKO_m8wod6Z_F9K6BngLBSDWFGgeWMxHae70ztjloXgDCBPpUN5xnlLco3q7q3uubbyL-GQCZdvwD1MOkqFcTzOCBsWouSPGG0ZZmPUtUbubtRyj7L9-hqaBfFngA6EiUHTNbobajjMpyk6DshG76Qs4xS4WE",method: 'PUT', mode: 'cors',
   cache: 'no-cache',
   credentials: 'same-origin',
   redirect: 'follow',
   referrerPolicy: 'no-referrer',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }, body: (editModal)
    }).then((response) => response.json())
    .then((actualData) => {
     fetchAlldata()
    
    })
  }
  // updating edit modal fields
  const edithandle=(e)=>{
   
    seteditModal((preVal) => {
    
      const { name, value } = e.target;

      return {
        ...preVal,
        [name]: value
      }
    });
  }
  //Searche
  const Search=(e) => {
   
    
    setDelid({id:e.target.value})
    fetch(`https://countydevapiaws.genial365.com:443/api/currency_units/${delid.id}`, )
    .then((response) => response.json())
      .then((actualData) => setgetApi(actualData));
  // console.log(res.json);
}
  
  //DELETE Data
  const onDelete = async () => {
    let id= delid.id;
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
     <div style={{float: 'right'}}><label className="align-right" >  Search: </label><input type="text" name="id" value={delid.id} onChange={Search} /></div>
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
          {/* getting API data in table  using map */ }
          {getApi?getApi.map((data, id) => {
           return (<tr key={id}>
              <td>{id + 1}</td>
              <td>{data.cuntry_name}</td>
              <td>{data.unit_name}</td>
              <td>
                {/* Delete button */}
                <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <i data-bs-toggle="modal" data-bs-target="#exampleModal" className="fa fa-trash-o btn " style={{ color: 'red' }}  onClick={() => Delid(data.currency_units_id)} >
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
                   onClick={()=>Edit(data.currency_units_id,data.cuntry_name , data.unit_name)}
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
                            <input type="text" className="form-control" name="cuntry_name" id="recipient-name" onChange={edithandle} value={editModal.cuntry_name}  />


                          </div>
                          <div className="mb-3">
                            <label htmlFor="message-text" >Enter Branch City:</label>


                            <input type="text" className="form-control" id="recipient-city" name="unit_name" onChange={edithandle} value={editModal.unit_name} />
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={EditApi}>Yes</button>
                      </div>
                    </div>
                  </div>
                </div>

              </td>
            </tr>)
          }):<div>Data not found</div>}

        </tbody>

      </table></>

  )
}

export default Table