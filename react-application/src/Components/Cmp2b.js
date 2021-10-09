import React, { useContext } from 'react'
import {Global} from './ContextApi'

function Cmp2b() {
    const {name} = useContext(Global);
    return (
        <div>
            <h3> I'm Cmp2b and using Context api value : {name}</h3>
        </div>
    )
}

export default Cmp2b