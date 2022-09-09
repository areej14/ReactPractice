import React from 'react'

export const Footer = () => {
    const styling={
       
            position:'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            backgroundColor: 'red',
            color: 'white',
            textAlign: 'center'
      
    }
     const year= new Date().getFullYear();
  return (
    <footer style={styling} className=" mt-auto py-3 bg-light">
  <div className="container">
    <p className="text-muted">Copyright @ {year}</p>
  </div>
</footer>
  )
}
