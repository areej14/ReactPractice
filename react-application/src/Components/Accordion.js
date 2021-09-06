import React, { useState } from 'react'

export default function Accordion() {
    const [click, setclick] = useState(false)

    return (
        <div>
            <button className="btn btn-success btn-lg btn-block" onClick={() => setclick(!click)}>{click ? <i className="fas fa-upload"> Show Less</i> : <i className="fas fa-download"> Show More</i>}</button>
            {click && (<div style={{textAlign: 'center', margin:"10px 10%"}}>Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica,Anim pariatur cliche reprehenderit, enim eiusmod
                    high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                     non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum 
                     eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-
                     origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt sapiente
                       ea proident. Ad vegan excepteur butcher vice lomo. Leggings 
                       occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore sustainable VHS.
                </div>&&<img src=""/>)}
            
        </div>
    )
}
