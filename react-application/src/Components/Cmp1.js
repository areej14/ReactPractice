import React, { useContext } from 'react'
import {Global} from './ContextApi'

function Cmp1() {
    const {name} = useContext(Global);
    return (
        <div>
            <h3> I'm Cmp1 and using Context api value : {name}</h3>
        </div>
    )
}

export default Cmp1
