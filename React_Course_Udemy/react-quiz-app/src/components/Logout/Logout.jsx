import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logOut } from '../../store/actions/auth';

class Logout extends Component{
    componentDidMount(){
        this.props.logout()
    }

    render(){
        return <Redirect to={'/'}/>
    }

}

function mapDispatchToPtops (dispatch){
    return {
        logout: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToPtops)(Logout);