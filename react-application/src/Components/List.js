import React from 'react'

export default function List({ data }) {
  console.log(data);
  return (
    <div>

      {data.map((item, i) => <li key={i}>{item}</li>)}

    </div>
  )
}
