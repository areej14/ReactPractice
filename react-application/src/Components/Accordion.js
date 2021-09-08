import React, { useState } from 'react'

export default function Accordion() {
    const [click1, setclick1] = useState(false)
    const [click2, setclick2] = useState(false)
    const Array = [`The Faisal Mosque (Urdu: فیصل مسجد‎, romanized: faisal masjid) is a mosque located in Islamabad, 
    Pakistan. It is the sixth-largest mosque in the world and the largest within South Asia, located on the foothills
     of Margalla Hills in Pakistan's capital city of Islamabad. The mosque features a contemporary design consisting 
     of eight sides of concrete shell and is inspired by the design of a typical Bedouin tent.`,
        `The Badshahi Mosque (Punjabi: بادشاہی مسجد, lit. 'The Royal Mosque') is a Mughal-era congregational mosque 
      in Lahore, capital of the Pakistani province of Punjab, Pakistan. The mosque is located west of Lahore
       Fort along the outskirts of the Walled City of Lahore, and is widely considered to be one of Lahore's most 
       iconic landmarks.`]
    return (
        <div className="container" style={{ textAlign: 'center' }}>
            <h1>Tour Guide</h1>
            <img src="https://www.constructionweekonline.com/cloud/2021/07/07/faisalmosque.jpg" style={{ height: "300px", width: "300px", borderRadius: "100%" }} />

            <div style={{ padding: '25px' }}> {click1 ? (Array[0]) : (Array[0].slice(0,80))}<span onClick={() => setclick1(!click1)}>{click1 ? <i className="fas fa-arrow-up"> Read Less</i> : <i className="fas fa-arrow-down"> Read More</i>}</span>

            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xDC6JLN7xqV6BT8dT5k_qfNO1SGfs7P4Ow&usqp=CAU" style={{ height: "300px", width: "300px", borderRadius: "100%" }} />
            <div style={{ padding: '25px' }}> {click2 ? (Array[1]) : (Array[1].slice(0,80))}<span onClick={() => setclick2(!click2)}>{click2 ? <i className="fas fa-arrow-up"> Read Less</i> : <i className="fas fa-arrow-down"> Read More</i>}</span>

            </div>

        </div>
    )
}
