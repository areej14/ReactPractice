import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
let a = React.createElement('h1',null,'Hello .. Its areej ')
let b= React.createElement('p',null,'Class-2 task done')
let c= React.createElement('li',null,'item 1')
ReactDOM.render(
  
  <React.StrictMode>
   <> {a} {b} {c}</>   
     {/* <App /> */}
   </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
