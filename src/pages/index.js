import React, { useContext } from 'react';
import { UserContext } from '../useContext';


export function Index(){
    // const msg = useContext(UserContext);

    const {value, setValue} = useContext(UserContext);
    return (<div>
            <h2>Home</h2>
            {/* <div>{msg}</div> */}
            <div>{value}</div>
            <button onClick={() => setValue('hey')}>Change Value</button>
    </div> )
}