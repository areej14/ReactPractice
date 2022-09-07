import React from 'react'
import {useEffect} from 'react'
export default function BasicPractice() {
    const y= new Date().toLocaleDateString();
    // const d =y.getDate();
    const t = new Date().toLocaleTimeString();
    function Data() {
     
      
      fetch('https://data.covid19india.org/data.json')
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
    useEffect(() => {
     Data();
     console.log("hello");
      }, []);
    
    return (
     
      <>
      <h1 contentEditable="true" >{y}</h1>
      <h1>{t}</h1>
      </>
    );
}
