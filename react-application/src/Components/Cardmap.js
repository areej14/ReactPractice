import React, { useState } from "react";
import List from "./newData.jsx";
import "../App.css";
import Card from "./Card";
const Cardmap = () => {
  const [data, setdata] = useState([]);
  return (
    <>
      <h2>TOTAL IMAGES {data.length}</h2>
      
      <div className="body">
      {/* {data.filter((it,i)=>( it.title=="Nike Shoes 02")).map((items)=>(<Card items={items}/>))} */}
        {data.map((item, i) => ( <Card items={item} key={i} /> ))}
        
      </div>
      <div className="btns">
        <button className="btn btn-success mx-2"onClick={() => {setdata(List)}}>Show</button>
        <button
          className="btn btn-danger"onClick={() => {setdata([]); }}>Clear</button>
      </div>
    </>
  );
};

export default Cardmap;
