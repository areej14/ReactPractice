
import Data from "./newData.jsx";
import "../App.css";
import React, { useState } from "react";
import Button from "./Button.js";
import Card from "./Card";
export default function Cardmap() {
   const category = Data.map((val, i) => val.category)
   console.log(category);
    const arrangeCategory = new Set(category)
    const arrangeData = ['All', ...arrangeCategory]
    // console.log("new", (arrangeData))
    const [item, setitem] = useState(Data)
    function desireItem(choice) {

        (choice == 'All') && setitem(Data)

        const filter = Data.filter((item) => item.category == choice)
        setitem(filter)
        console.log(filter)
    }
      
  return (
    <>
     <h2>React menu</h2>
     <div className="main">
            <Button category={arrangeData} fun={desireItem} />
            <div className="body"> {item.map((i, k) => <Card items={i} index={k} key={k}/>)}</div>

        </div>


    </>
  )
}