import React from 'react';
import { useAlertToggle } from './AlertContext';

export default function Main(){
    const toggle = useAlertToggle();
    return (
        <>
            <h1>Hello from example with Context</h1>
            <button onClick={toggle}>Show alert</button>
        </>
    )
}