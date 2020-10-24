import React, { useContext } from 'react';
import { UserContext} from '../useContext'


export function About(){
    // const msg = useContext(UserContext);
    const {value, setValue} = useContext(UserContext);
    return <div>
            <h2>About</h2>
            {/* <div>{msg}</div> */}
            <div>{value}</div>
    </div> 
}