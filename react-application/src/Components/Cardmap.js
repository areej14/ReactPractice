import React, { useState } from "react";
import List from "./AllData.jsx";
import "../App.css";
import Card from "./Card";
const Cardmap = () => {
  const [data, setdata] = useState([]);

  // const filter = (value) => {
  //   if (value !== "All") {
  //     const newlist = List.filter((item) => item.category === value)
  //     setdata(newlist)
  //   }
  //   else {
  //     setdata(List)
  //   }
  // }
  return (
    <>
      

      <div className="body">
        {data.map((item, i) => (<Card items={item} index={i} key={i} />))}
      </div>

    </>
  );
};

export default Cardmap;
