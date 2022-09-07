import React, { useState } from 'react'

export default function Accordion() {
    const [click, setclick] = useState(null)
   
    const Array = [{content:`The Faisal Mosque (Urdu: فیصل مسجد‎, romanized: faisal masjid) is a mosque located in Islamabad, 
    Pakistan. It is the sixth-largest mosque in the world and the largest within South Asia, located on the foothills
     of Margalla Hills in Pakistan's capital city of Islamabad. The mosque features a contemporary design consisting 
     of eight sides of concrete shell and is inspired by the design of a typical Bedouin tent.`,
      img:'https://www.constructionweekonline.com/cloud/2021/07/07/faisalmosque.jpg'},
      {
       content:`The Badshahi Mosque (Punjabi: بادشاہی مسجد,
           ,lit. 'The Royal Mosque') is a Mughal-era congregational mosque 
      in Lahore, capital of the Pakistani province of Punjab, Pakistan. The mosque is located west of Lahore
       Fort along the outskirts of the Walled City of Lahore, and is widely considered to be one of Lahore's most 
       iconic landmarks.`, 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xDC6JLN7xqV6BT8dT5k_qfNO1SGfs7P4Ow&usqp=CAU"}]
       const toggle=(a)=>{
           if(click===a)
          setclick(null)
          else
          setclick(a)
       }
    return (
        <div className="container" style={{ textAlign: 'center' }}>
            
            <h1>Tour Guide</h1>
            
            {Array.map((item,i)=> <div style={{ padding: '25px' }}><img src={item.img}
             style={{ height: "300px", width: "300px", borderRadius: "100%" }} /><br/>
              {click===i ? item.content : (item.content.slice(0, 80))}
            <span onClick={() => toggle(i)}>{click===i ? (<a href="#" >Read Less 
            <i className="fas fa-arrow-up" /></a>) : 
            (<a href="#" >... Read More <i className="fas fa-arrow-down"></i></a>)}</span>

</div>)}
            
        </div>
    )
}
