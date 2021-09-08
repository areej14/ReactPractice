import React from 'react';
import '../App.css';

export default function Button({ category, fun }) {
  // console.log("  category",category)
  return (
    <div className="btns">

      {category.map((i, k) => <button type="button" className="btn btn-outline-danger mx-2" onClick={() => fun(i)} key={k}>{i}</button>)}


    </div>
  )
}
