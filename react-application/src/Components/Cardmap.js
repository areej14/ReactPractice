import React, { useState } from "react";
import List from "./newData.jsx";
import "../App.css";
import Card from "./Card";
const Cardmap = () => {
  const [data, setdata] = useState([]);

  const filter = (value) => {
    if (value !== "All") {
      const newlist = List.filter((item) => item.category === value)
      setdata(newlist)
    }
    else {
      setdata(List)
    }
  }
  return (
    <>
      <h2>Menu Card</h2>
      <div className="btns">
        <button className="btn btn-success  mx-2" onClick={() => filter('All') }>All</button>
        <button className="btn btn-warning text-white mx-2" onClick={() => filter('Shake')}>Shake</button>
        <button className="btn btn-primary mx-2" onClick={() => filter('Breakfast') }>Breakfast</button>
        <button className="btn btn-info mx-2" onClick={() =>  filter('Lunch')}>Lunch</button>
        <button className="btn btn-danger mx-2" onClick={() =>  setdata([]) }>Clear</button>
      </div>

      <div className="body">
        {data.map((item, i) => (<Card items={item} index={i} key={i} />))}
      </div>

    </>
  );
};

export default Cardmap;
