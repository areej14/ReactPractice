import React, { useContext } from 'react'
import {Global} from './ContextApi'

function Cmp3c() {
    const {name} = useContext(Global);
    return (
        <div>
            <h3> I'm Cmp3c and using Context api value : {name}</h3>
        </div>
    )
}

export default Cmp3c