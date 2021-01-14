import React from 'react';
import classes from './Car.module.css';
import withClass from '../hoc/withClass';
import PropTypes from 'prop-types';

/* function Car(){
    return (
        <div>
            <h2>This is car component</h2>
        </div>
    )
} */

class Car extends React.Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef();
    }
/* 
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps)
}
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps, nextState)
        return nextProps.name.trim() !== this.props.name.trim();
    }

    componentWillUpdate(nextProps, nextState){
        //тут можно вызывать
        console.log('componentWillUpdate', nextProps, nextState)
    }

   /*  static getDerivedStateFromProps(nextProps, prevState){
        console.log('Car getDerivedStateFromProps', nextProps, prevState)

        return prevState;
    } */

    /* componentDidUpdate(){
        console.log('componentDidUpdate')
    }
 */
    /* getSnapshotBeforeUpdate(){
        console.log ('Car getSnapshotBeforeUpdate')
    } */

   /*  componentWillUnmount(){
        console.log('Car componentWillUnmount');
    } */

    componentDidMount(){
        if (this.props.index === 1){
             this.inputRef.current.focus()
        }
    }
    
    render(){

    /* if (Math.random() > 0.7){
        throw new Error('Car random failed');
    } */

    const inputClasses = ['input'];

    if(this.props.name) {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    if (this.props.name.length > 4){
        inputClasses.push('bold')
    }
    return (
        <React.Fragment>
            <h2>This is car component</h2>
            <strong>Number: {Math.round(Math.random() * 100)}</strong>
            <p>This is our car: <strong> {this.props.name} </strong> </p>
            <p>Year: <strong>{this.props.year}</strong></p>
            <input
            ref={this.inputRef}
            type="text"
            onChange={this.props.onChangeName}
            value={this.props.name}
            className={inputClasses.join(' ')}
            />
            {/* <button onClick={props.onChangeTitle}>Click</button> */}
            <button onClick={this.props.onDelete}>Delete</button>

        </React.Fragment>
    );
    }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}

export default withClass(Car, classes.Car);