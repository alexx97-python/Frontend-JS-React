import React from 'react';
import './Car.css'

/* function Car(){
    return (
        <div>
            <h2>This is car component</h2>
        </div>
    )
} */

const Car = (props) => {
    const inputClasses = ['input'];

    if(props.name) {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    if (props.name.length > 4){
        inputClasses.push('bold')
    }
    return (
        <div className='Car'>
            <h2>This is car component</h2>
            <strong>Number: {Math.round(Math.random() * 100)}</strong>
            <p>This is our car: <strong> {props.name} </strong> </p>
            <p>Year: <strong>{props.year}</strong></p>
            <input 
            type="text"
            onChange={props.onChangeName}
            value={props.name}
            className={inputClasses.join(' ')}
            />
            {/* <button onClick={props.onChangeTitle}>Click</button> */}
            <button onClick={props.onDelete}>Delete</button>

        </div>
    );
}

export default Car;