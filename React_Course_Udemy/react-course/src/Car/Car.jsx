import React from 'react';

/* function Car(){
    return (
        <div>
            <h2>This is car component</h2>
        </div>
    )
} */

const Car = (props) => {
    return (
        <div>
            <h2>This is car component</h2>
            <strong>Number: {Math.round(Math.random() * 100)}</strong>
            <p>This is our car: <strong> {props.name} </strong> </p>
            <p>Year: <strong>{props.year}</strong></p>
            {props.children}
        </div>
    );
}

export default Car;