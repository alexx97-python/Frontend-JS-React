import React, {Component} from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.css'

export default class Auth extends Component {

    loginHandler = () => {

    }

    signupHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault();
    }

    render(){
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Authorization</h1>

                    <form onSubmit= {this.submitHandler} className={classes.AuthForm}>
                        <input type="text"/>
                        <input type="text"/>

                        <Button
                          type="success"
                          onClick={this.loginHandler}
                        >Log In</Button>

                        <Button
                          type="primary"
                          onClick={this.signupHandler}
                        >Sign Up</Button>
                    </form>
                </div>
            </div>
        )
    }
}